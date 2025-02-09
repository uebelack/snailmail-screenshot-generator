import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Overview({ language }) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPad Pro (12.9-inch) (6th generation)-01_overview.png`} />
      <img className="mock" alt="ipad129" src="/ipad129.png" />
    </div>
  );
}

Overview.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Overview;
