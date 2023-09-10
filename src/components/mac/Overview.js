import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Overview({ language }) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img className="mock" alt="mac" src="/mac.png" />
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/Mac_Overview.png`} />
      <img className="logo" alt="logo" src="/logo.svg" />
    </div>
  );
}

Overview.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Overview;
