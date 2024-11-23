import React from 'react';
import PropTypes from 'prop-types';

const ShowcaseItem = ({ title, description, imgUrl, reverse }) => {
  return (
    <div className={`row g-0 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div
        className="col-lg-6 text-white showcase-img" // Applied showcase-img class
        style={{
          backgroundImage: `url(${imgUrl})`, // Dynamically using imgUrl prop
        }}
      ></div>
      <div className="col-lg-6 my-auto showcase-text"> {/* Applied showcase-text class */}
        <h2>{title}</h2>
        <p className="lead mb-0">{description}</p>
      </div>
    </div>
  );
};

ShowcaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

ShowcaseItem.defaultProps = {
  reverse: false,
};

export default ShowcaseItem;
