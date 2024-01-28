import React from 'react';
import PropTypes from 'prop-types';

function Detail({ language }) {
  return (
    <div className="detail">
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/iPhone 15-02_detail.png`} />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

Detail.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Detail;
