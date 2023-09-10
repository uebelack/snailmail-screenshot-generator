import React from 'react';
import PropTypes from 'prop-types';

function Detail({ language }) {
  return (
    <div className="detail">
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPhone SE (3rd generation)-02_detail.png`} />
      <img className="mock" alt="iphone55" src="/iphone55.png" />
    </div>
  );
}

Detail.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Detail;
