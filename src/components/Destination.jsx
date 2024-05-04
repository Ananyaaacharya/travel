import React, { useEffect } from 'react';
import Card from './Card';
import './Card.css';


const cardsData = [
  
  {
    id: 1,
    title: 'Beaches',
    description: 'The beaches of Mangalore are renowned for their pristine sands and inviting waters, offering scenic views and a tranquil atmosphere for relaxation and leisure activities.',
    imageUrl: './images/beach.jpg',
    
  },
  {
    id: 2,
    title: 'Religious sites',
    description: 'Mangalore is known for its rich cultural heritage and vibrant religious sites.One of the prominent religious sites in Mangalore is the Kudroli Gokarnath Temple.',
    imageUrl: './images/site.jpg',
    
  },
  {
    id: 3,
    title: 'Parks and Gardens',
    description: 'Mangalore boasts serene parks and gardens that offer peaceful retreats amidst nature. Among these, Kadri Park stands out for its lush greenery, tranquil atmosphere, and recreational facilities. ',
    imageUrl: './images/park.jpg',
   
  }
];

const Destination = () => {
  useEffect(() => {
    console.log('Destination component rendered'); 
  }, []);

  return (
    <div className="destination-container">
      {cardsData.map((card) => (
     
       <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          
        />

     
      ))}
    </div>
  );
};

export default Destination;
