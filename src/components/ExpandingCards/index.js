import React, { useState } from 'react';
import Card from './Card';
import { ExpandingCardsWrapper } from './styles';

const cardsData = [
  {
    title: "春",
    description: "春をながめる余裕もなく",
    path: "card1.jpg",
  },
  {
    title: "夏",
    description: "夏をのりきる力もなく",
    path: "card2.jpg",
  },
  {
    title: "秋",
    description: "秋の枯葉に身をつつみ",
    path: "card3.jpg",
  },
    {
    title: "冬",
    description: "冬に骨身をさらけだす",
    path: "card4.jpg",
  },
];

export const ExpandingCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  function handleClick(index) {
    return setActiveCardIndex(index);
  }

  return (
    <ExpandingCardsWrapper>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          id={index}
          onClick={handleClick}
          isActive={index === activeCardIndex}
          title={card.title}
          description={card.description}
          path={card.path}
        />
      ))}
    </ExpandingCardsWrapper>
  );
};