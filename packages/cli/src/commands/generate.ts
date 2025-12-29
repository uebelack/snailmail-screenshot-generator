import { createServer, build } from 'vite';
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs/promises';
import chalk from 'chalk';
import ora from 'ora';
import getPort from 'get-port';

interface GenerateOptions {
  config: string;
  output: string;
  port: string;
}

interface ScreenConfig {
  key: string;
}

interface DeviceConfig {
  key: string;
  fastlaneKeys: string[];
  width: number;
  height: number;
  screens: ScreenConfig[];
}

interface ProjectConfig {
  languages: string[];
  devices: DeviceConfig[];
}

export async function generateCommand(options: GenerateOptions): Promise<void> {
  const spinner = ora('Loading configuration...').start();

  try {
    // Build the project first to ensure config is compiled
    const configPath = path.resolve(process.cwd(), options.config);

    // Check if config exists
    try {
      await fs.access(configPath);
    } catch {
      spinner.fail(`Config file not found: ${configPath}`);
      process.exit(1);
    }

    // Use vite to build a temporary bundle that we can import
    const tempDir = path.join(process.cwd(), '.screegen-temp');
    await fs.mkdir(tempDir, { recursive: true });

    // Build the config file
    await build({
      configFile: false,
      build: {
        lib: {
          entry: configPath,
          formats: ['es'],
          fileName: 'config',
        },
        outDir: tempDir,
        emptyOutDir: true,
        rollupOptions: {
          external: ['react', 'react-dom', '@screegen/components'],
        },
      },
      logLevel: 'silent',
    });

    // Import the built config
    const builtConfigPath = path.join(tempDir, 'config.js');
    const configModule = await import(builtConfigPath);
    const config: ProjectConfig = configModule.default;

    spinner.text = 'Starting dev server...';

    // Get available port
    const port = await getPort({ port: parseInt(options.port) });

    // Start Vite dev server
    const server = await createServer({
      root: process.cwd(),
      server: { port, open: false },
      logLevel: 'silent',
    });
    await server.listen();

    const baseUrl = `http://localhost:${port}`;
    spinner.text = `Dev server running at ${baseUrl}`;

    // Launch Playwright
    const browser = await chromium.launch();

    spinner.succeed('Setup complete');
    console.log(chalk.blue('\nGenerating screenshots...\n'));

    const outputDir = path.resolve(process.cwd(), options.output);
    await fs.mkdir(outputDir, { recursive: true });

    let screenshotCount = 0;

    for (const device of config.devices) {
      console.log(chalk.cyan(`\n${device.key}:`));

      for (const screen of device.screens) {
        for (const language of config.languages) {
          const page = await browser.newPage();

          await page.setViewportSize({
            width: Math.floor(device.width / 2),
            height: Math.floor(device.height / 2),
          });

          const url = `${baseUrl}/screens/${device.key}/${screen.key}/${language}`;
          await page.goto(url);
          await page.waitForLoadState('networkidle');

          // Wait for fonts and images
          await page.waitForTimeout(500);

          const langDir = path.join(outputDir, language);
          await fs.mkdir(langDir, { recursive: true });

          for (const fastlaneKey of device.fastlaneKeys) {
            const screenIndex = device.screens.indexOf(screen) + 1;
            const filename = `${screenIndex}_${fastlaneKey}_${screenIndex}.png`;
            const filepath = path.join(langDir, filename);

            await page.screenshot({ path: filepath });
            screenshotCount++;

            console.log(chalk.gray(`  ${language}/${filename}`));
          }

          await page.close();
        }
      }
    }

    await browser.close();
    await server.close();

    // Clean up temp directory
    await fs.rm(tempDir, { recursive: true, force: true });

    console.log(chalk.green(`\nGenerated ${screenshotCount} screenshots to ${outputDir}`));
  } catch (error) {
    spinner.fail('Generation failed');
    console.error(chalk.red(error instanceof Error ? error.message : String(error)));
    process.exit(1);
  }
}
