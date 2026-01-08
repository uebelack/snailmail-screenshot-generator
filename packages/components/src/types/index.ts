import { ComponentType } from "react";

/**
 * Color scheme for light/dark mode
 */
export type ColorScheme = "light" | "dark";

export const colorSchemes: ColorScheme[] = ["light", "dark"];

/**
 * A feature item with title, description, and icon
 */
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

/**
 * A section of features with a title
 */
export interface FeatureSection {
  title: string;
  features: Feature[];
}

/**
 * Props passed to screen components
 */
export interface ScreenComponentProps<L extends string = string> {
  language: L;
  deviceKey: string;
  width: number;
  height: number;
}

/**
 * Configuration for a single screen
 */
export interface ScreenConfig<L extends string = string> {
  key: string;
  component: ComponentType<ScreenComponentProps<L>>;
}

/**
 * Configuration for a device (iPhone, iPad, Mac, etc.)
 */
export interface DeviceConfig<L extends string = string> {
  key: string;
  fastlaneKeys: string[];
  width: number;
  height: number;
  screens: ScreenConfig<L>[];
}

/**
 * Root project configuration
 */
export interface ProjectConfig<L extends string = string> {
  languages: L[];
  devices: DeviceConfig<L>[];
}

/**
 * Props for screen components
 */
export interface ScreenProps<L extends string = string> {
  deviceKey: string;
  screenKey: string;
  language: L;
}
