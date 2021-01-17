import React, { useState } from 'react';
import Card from './Card';
import { ExpandingCardsWrapper } from './styles';

const cardsData = [
  {
    title: "春",
    description: "春をながめる余裕もなく",
    url: "https://software.pitang1965.com/tmp/card1.jpg",
  },
  {
    title: "夏",
    description: "夏をのりきる力もなく",
    url: "https://software.pitang1965.com/tmp/card2.jpg",
  },
  {
    title: "秋",
    description: "秋の枯葉に身をつつみ",
    url: "https://software.pitang1965.com/tmp/card3.jpg",
  },
    {
    title: "冬",
    description: "冬に骨身をさらけだす",
    url: "https://software.pitang1965.com/tmp/card4.jpg",
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
          url={card.url}
        />
      ))}
    </ExpandingCardsWrapper>
  );
};