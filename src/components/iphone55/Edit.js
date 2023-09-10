import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Edit({ language }) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPhone SE (3rd generation)-03_edit.png`} />
      <img className="mock" alt="iphone55" src="/iphone55.png" />
    </div>
  );
}

Edit.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Edit;
