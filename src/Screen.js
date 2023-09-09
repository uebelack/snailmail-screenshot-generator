import React from 'react';
import { useParams } from 'react-router-dom';
import config from './config';

function Screen() {
  const { deviceKey, screenKey, languageKey } = useParams();

  const device = config.devices.find((d) => d.key === deviceKey);

  return (
    <div className="screen" style={{ width: device.width / 2, height: device.height / 2 }}>
      {deviceKey}
      /
      {screenKey}
      /
      {languageKey}
    </div>
  );
}

export default Screen;
