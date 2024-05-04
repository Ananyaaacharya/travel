import React from 'react';
import './Places.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Parks and Gardens of Mangalore</h1>

      <div className="place-info">
      <h2>Kadri Park</h2>
      <img src="./images/kadri.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <img src="./images/kadri2.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <p>Kadri Park in Mangalore is a verdant oasis nestled amidst the bustling cityscape, offering a serene escape and recreational haven for locals and tourists alike. With its lush greenery, scenic pathways, and vibrant floral displays, the park provides a perfect setting for leisurely strolls, picnics, and outdoor activities. The park's iconic Kadri Manjunath Temple, dating back to the 10th century, adds a touch of historical charm and cultural significance to the surroundings. Whether seeking tranquility amidst nature or exploring the city's heritage, Kadri Park is a delightful destination for all ages to unwind and rejuvenate.</p>
      </div>

      <div className="place-info">
      <h2>Tagore Park</h2>
      <img src="./images/tagore.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <img src="./images/tagore2.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <p>Tagore Park in Mangalore is a serene green space named after the renowned poet Rabindranath Tagore, offering a peaceful retreat and recreational oasis in the heart of the city. With its well-manicured gardens, shady trees, and tranquil ambiance, the park is an ideal spot for leisurely walks, picnics, and outdoor activities. Visitors can unwind amidst nature, enjoy the scenic beauty, and appreciate the park's cultural significance, making it a popular destination for both locals and tourists seeking a refreshing escape from the urban hustle and bustle.</p>
      </div>

      <div className="place-info">
      <h2>Pilikula Nisargadhama</h2>
      <img src="./images/pilikula.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <img src="./images/pilikula2.jpg" alt="Panambur Beach" className="beach-thumbnail" />
      <p>Pilikula Nisargadhama in Mangalore is a captivating nature park and cultural complex, encompassing lush greenery, wildlife sanctuaries, and recreational facilities. This sprawling destination offers a blend of natural beauty and educational experiences, with attractions like the Dr. Shivaram Karanth Biological Park showcasing diverse flora and fauna, and the Pilikula Golf Club offering scenic views and leisurely golfing experiences. The Pilikula Nisargadhama also houses the Heritage Village, showcasing traditional homes and artifacts, and the Manasa Amusement & Water Park for family-friendly fun. With its array of attractions, Pilikula is a must-visit destination for nature enthusiasts, families, and cultural explorers in Mangalore.</p>
      </div>
      <p>These parks and gardens in Mangalore not only offer a refreshing escape from the city's hustle and bustle but also showcase the region's natural diversity and conservation efforts.</p>
    </div>
  );
};

export default BlogPage;
