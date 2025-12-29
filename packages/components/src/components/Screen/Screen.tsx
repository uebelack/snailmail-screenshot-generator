import { ProjectConfig } from '../../types';
import styles from './Screen.module.scss';

export interface ScreenProps<L extends string = string> {
  config: ProjectConfig<L>;
  deviceKey: string;
  screenKey: string;
  language: L;
  className?: string;
}

export function Screen<L extends string>({
  config,
  deviceKey,
  screenKey,
  language,
  className,
}: ScreenProps<L>) {
  const device = config.devices.find((d) => d.key === deviceKey);
  const screen = device?.screens.find((s) => s.key === screenKey);

  if (!device || !screen) {
    return null;
  }

  const ScreenComponent = screen.component;

  return (
    <div
      className={`${styles.screen} ${className || ''}`}
      data-device={device.key}
      style={{ width: device.width, height: device.height }}
    >
      {ScreenComponent ? (
        <ScreenComponent
          language={language}
          deviceKey={device.key}
          width={device.width}
          height={device.height}
        />
      ) : (
        screenKey
      )}
    </div>
  );
}
