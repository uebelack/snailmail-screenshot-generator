# screegen

A screenshot generation toolkit for creating App Store screenshots. Build beautiful, localized screenshots for multiple devices with React and Playwright.

## Packages

| Package | Description |
|---------|-------------|
| [@screegen/components](./packages/components) | Reusable React components for building screenshot layouts |
| [@screegen/cli](./packages/cli) | CLI tool for scaffolding projects and generating screenshots |

## Quick Start

### Create a new project

```bash
npx @screegen/cli init -n my-app
cd my-app
yarn install
```

### Development

```bash
yarn dev
```

### Generate screenshots

```bash
npx screegen generate
```

## Features

- **Multi-device support**: Generate screenshots for iPhone, iPad, Mac, and more
- **Multi-language**: Built-in support for localized screenshots
- **Dark mode**: Light and dark color scheme support
- **Playwright-powered**: Fast, reliable screenshot generation
- **React-based**: Use familiar React patterns to build screenshot layouts
- **Fastlane compatible**: Output naming compatible with fastlane deliver

## Project Structure

```
screegen/
├── packages/
│   ├── components/     # @screegen/components - React component library
│   │   ├── src/
│   │   │   ├── types/          # TypeScript type definitions
│   │   │   ├── hooks/          # React hooks (useColorScheme, useUrlState)
│   │   │   └── components/     # Screen, FeatureList, OverviewGrid, etc.
│   │   └── package.json
│   │
│   └── cli/            # @screegen/cli - Command line tool
│       ├── src/
│       │   ├── commands/       # init, generate commands
│       │   └── templates/      # Project scaffolding templates
│       └── package.json
│
└── package.json        # Root workspace config
```

## Development

This is a yarn workspaces monorepo.

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run tests
yarn test
```

## Components

### Screen

Config-driven screen renderer that dynamically loads the correct component based on device and screen key.

```tsx
import { Screen } from '@screegen/components';

<Screen
  config={config}
  deviceKey="iphone"
  screenKey="overview"
  language="en-US"
/>
```

### FeatureList

Renders a list of features with icons.

```tsx
import { FeatureList } from '@screegen/components';

<FeatureList
  title="Features"
  features={[
    { title: 'Feature 1', description: 'Description', icon: 'star' }
  ]}
/>
```

### OverviewGrid

Full-page overview with controls for language, scale, and color scheme.

```tsx
import { OverviewGrid } from '@screegen/components';

<OverviewGrid
  config={config}
  language="en-US"
  scale={0.5}
  colorScheme="light"
  onLanguageChange={setLanguage}
/>
```

### Hooks

```tsx
import { useColorScheme, useUrlState } from '@screegen/components';

// Detect system color scheme
const colorScheme = useColorScheme();

// Manage state via URL parameters
const [language, setLanguage] = useUrlState('language', 'en-US');
```

## Configuration

Create a `screegen.config.ts` file:

```typescript
import { ProjectConfig } from '@screegen/components';
import OverviewScreen from './src/screens/Overview';
import FeaturesScreen from './src/screens/Features';

type AppLanguageCode = 'en-US' | 'de-DE';

const config: ProjectConfig<AppLanguageCode> = {
  languages: ['en-US', 'de-DE'],
  devices: [
    {
      key: 'iphone',
      fastlaneKeys: ['APP_IPHONE_67'],
      width: 1290,
      height: 2796,
      screens: [
        { key: 'overview', component: OverviewScreen },
        { key: 'features', component: FeaturesScreen },
      ],
    },
  ],
};

export default config;
```

## License

MIT
