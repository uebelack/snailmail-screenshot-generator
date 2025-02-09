import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';

function Edit({ language }) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPad Pro (12.9-inch) (6th generation)-03_edit.png`} />
      <img className="mock" alt="ipad129" src="/ipad129.png" />
    </div>
  );
}

Edit.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Edit;
