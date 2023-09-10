import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function OverviewPage() {
  return (
    <>
      <h1>Overview</h1>
      <ul>
        { config.devices.map((device) => (
          <li key={device.key}>
            <Link to={`/devices/${device.key}`}>{device.key}</Link>
          </li>
        )) }
      </ul>
    </>
  );
}

export default OverviewPage;
