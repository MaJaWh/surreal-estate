import React from 'react';
import PropTypes from 'prop-types';

function PropertyCard(props) {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;
  return (
    <div>
      <div className="propertyCard-title">{title}</div>
      <div className="propertyCard-type">{type}</div>
      <div className="propertyCard-bathrooms">{bathrooms}</div>
      <div>{bedrooms}</div>
      <div>{price}</div>
      <div>{city}</div>
      <div>{email}</div>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
