import React from 'react';


const Card = ({ title, description, imageUrl, linkUrl }) => (
  <div className="card">
    <img src={imageUrl} alt={title} className="card-image" />
    <div className="card-content">
      <h2>{title}</h2>
      <p>{description}</p>
  
    </div>
  </div>
);

export default Card;
