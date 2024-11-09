import React from 'react';
import Card from './Card';

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 4',
      description: 'This is the description for Card 4.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 5',
      description: 'This is the description for Card 5.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 6',
      description: 'This is the description for Card 6.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 7',
      description: 'This is the description for Card 7.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Card 8',
      description: 'This is the description for Card 8.',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
  ];

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
