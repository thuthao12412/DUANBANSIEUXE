import React from 'react';

interface FruitCardProps {
  fruit: {
    name: string;
    description: string;
    image: string;
  };
}

const FruitCard: React.FC<FruitCardProps> = ({ fruit }) => {
  return (
    <div className="fruit-card">
      <img src={fruit.image} alt={fruit.name} />
      <h3>{fruit.name}</h3>
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitCard;
