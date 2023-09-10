import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Edit({ language }) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img className="mock" alt="mac" src="/mac.png" />
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/Mac_Edit.png`} />
      <img className="logo" alt="logo" src="/logo.svg" />
    </div>
  );
}

Edit.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Edit;
