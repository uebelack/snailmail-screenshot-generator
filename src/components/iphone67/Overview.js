import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Overview({ language }) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPhone 14-01_overview.png`} />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

Overview.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Overview;
