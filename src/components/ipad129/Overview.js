import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Overview({ language }) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPad Air 11-inch (M3)-01_overview.png`}
      />
      <img className="mock" alt="ipad129" src="/ipad129.png" />
      <div className="border" />
    </div>
  );
}

Overview.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Overview;
