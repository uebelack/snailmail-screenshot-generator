import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { generateCommand } from "./commands/generate.js";

const program = new Command();

program
  .name("screegen")
  .description("Screenshot generation tool for app store assets")
  .version("1.0.0");

program
  .command("init")
  .description("Create a new screegen project")
  .option("-n, --name <name>", "Project name")
  .option("-d, --directory <dir>", "Target directory", process.cwd())
  .action(initCommand);

program
  .command("generate")
  .description("Generate screenshots using Playwright")
  .option("-o, --output <dir>", "Output directory", "screenshots")
  .option("-p, --port <port>", "Dev server port", "3000")
  .action(generateCommand);

program.parse();
