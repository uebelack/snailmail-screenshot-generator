import React from 'react';
import PropTypes from 'prop-types';
import config from '../config';

function Screen({ deviceKey, screenKey, language }) {
  const device = config.devices.find((d) => d.key === deviceKey);
  const screen = device.screens.find((d) => d.key === screenKey);

  return (
    <div className={`screen ${device.key}`} style={{ width: device.width / 2, height: device.height / 2 }}>
      { screen.component ? <screen.component language={language} /> : screenKey}
    </div>
  );
}

Screen.propTypes = {
  deviceKey: PropTypes.string.isRequired,
  screenKey: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Screen;
