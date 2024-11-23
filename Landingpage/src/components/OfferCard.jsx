
import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = ({ imgSrc, title, description }) => {
  return (
    <div className="col-lg-4">
      <div className="offer-item mx-auto mb-5 mb-lg-0 text-center">
        <img className="img-fluid rounded mb-3" src={imgSrc} alt={`${title} image`} />
        <h5 className="text-uppercase">{title}</h5>
        <p className="font-weight-light">{description}</p>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OfferCard;
