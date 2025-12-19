import config, { LanguageCode } from '../config';

interface ScreenProps {
  deviceKey: string;
  screenKey: string;
  language: LanguageCode;
}

function Screen({ deviceKey, screenKey, language }: ScreenProps) {
  const device = config.devices.find((d) => d.key === deviceKey);
  const screen = device?.screens.find((d) => d.key === screenKey);

  if (!device || !screen) {
    return null;
  }

  const ScreenComponent = screen.component;

  return (
    <div className={`screen ${device.key}`} style={{ width: device.width / 2, height: device.height / 2 }}>
      {ScreenComponent ? <ScreenComponent language={language} /> : screenKey}
    </div>
  );
}

export default Screen;
