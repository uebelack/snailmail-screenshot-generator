import React from 'react';
import { Link } from 'react-router-dom';
import config from './config';

function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <ul>
        { config.devices.map((device) => (
          <li key={device.key}>
            {device.key}
            <ul>
              { device.screens.map((screen) => (
                <li key={screen.key}>
                  {screen.key}
                  {': '}
                  {config.languages.map((language) => (
                    <span key={language}>
                      <Link to={`/screens/${device.key}/${screen.key}/${language}`}>{language}</Link>
                      {' '}
                      |
                      {' '}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </li>
        )) }
      </ul>
    </>
  );
}

export default Overview;
