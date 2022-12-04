import React from 'react';
import PropertyCard from './PropertyCard';

function Properties() {
  const initialProperties = [
    {
      title: 'My House',
      type: 'Flat',
      bathrooms: 5,
    },
    {
      title: 'My House',
      type: 'Flat',
      bathrooms: 5,
    },
    {
      title: 'My House',
      type: 'Flat',
      bathrooms: 5,
    },
    {
      title: 'My House',
      type: 'Flat',
      bathrooms: 5,
    },
  ];

  return (
    <div>
      <h1>Properties Page</h1>
      {initialProperties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          type={property.type}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
          price={property.price}
          city={property.city}
          email={property.email}
        />
      ))}
    </div>
  );
}
export default Properties;
