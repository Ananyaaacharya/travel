import React from 'react';
import './Places.css';

const BeachesBlog = () => {
  return (
    <div className="blog-container">
      <h1>Exploring the Beautiful Beaches of Mangalore</h1>
      
      <div className="place-info">
        <h2>Panambur Beach</h2>
        <img src="./images/panambur.jpg" alt="Panambur Beach" className="beach-thumbnail" />
        <img src="./images/panambur2.jpg" alt="Panambur Beach" className="beach-thumbnail" />
        <p>Panambur Beach, nestled along Mangalore's coastline, enchants travelers with its soft sands and azure waters. A haven for both relaxation and adventure, visitors can enjoy leisurely walks, thrilling water sports like jet skiing, and captivating sunsets that paint the sky in vibrant hues. With beachside shacks offering delightful seafood and nearby attractions like Tannirbavi Beach to explore, Panambur Beach promises a memorable coastal getaway filled with natural beauty and coastal charm.</p>
      </div>
      
      <div className="place-info">
        <h2>Tannirbhavi Beach</h2>
        <img src="./images/tannir.jpg" alt="Tannirbhavi Beach" className="beach-thumbnail" />
        <img src="./images/tannir2.jpg" alt="Tannirbhavi Beach" className="beach-thumbnail" />
        <p> Tannirbhavi Beach, nestled along the western coast of India, is a serene haven for beach enthusiasts and nature lovers alike. Its golden sands stretch invitingly along the azure Arabian Sea, offering breathtaking sunsets and a tranquil atmosphere for relaxation. The beach's gentle waves beckon visitors to indulge in water sports or simply bask in the beauty of its pristine surroundings, making it a must-visit destination for a rejuvenating coastal escape.</p>
      </div>

      <div className="place-info">
        <h2>Surathkal Beach</h2>
        <img src="./images/surathkal.jpg" alt="Surathkal Beach" className="beach-thumbnail" />
        <img src="./images/surathkal2.jpg" alt="Surathkal Beach" className="beach-thumbnail" />
        <p>Surathkal Beach, located near Mangalore, is a picturesque coastal gem renowned for its tranquil shores and stunning sunsets. The golden sands and clear waters create a perfect setting for leisurely strolls or adventurous water activities like surfing and beach volleyball. Surrounded by lush greenery and offering panoramic views of the Arabian Sea, it's a haven for nature lovers and beachgoers seeking a peaceful retreat with a touch of coastal charm.</p>
      </div>

      <p>These are just a few of the enchanting beaches that Mangalore has to offer. Whether you're seeking adventure or tranquility, the beaches here promise unforgettable experiences.</p>
    </div>
  );
};

export default BeachesBlog;
