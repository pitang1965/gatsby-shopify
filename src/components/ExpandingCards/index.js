import React, { useState } from 'react';
import Card from './Card';
import { ExpandingCardsWrapper } from './styles';
import PropTypes from 'prop-types';

export const ExpandingCards = ({ cards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleClick = index => setActiveCardIndex(index);

  return (
    <ExpandingCardsWrapper>
      {cards.map((card, index) => (
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

ExpandingCards.propTypes = {
  cards: PropTypes.array.isRequired,
};
