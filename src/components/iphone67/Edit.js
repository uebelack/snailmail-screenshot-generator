import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Edit({ language }) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPhone 14-03_edit.png`} />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

Edit.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Edit;
