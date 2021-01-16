import React from 'react';
import { CardWrapper, Title, Description } from './styles';
import PropTypes from 'prop-types';

// Gatsbyの場合は
// import Img from 'gatsby-image';
// Cardの引数 url を imageFluid に変更
// retur() 内に <Img fluid={imageFluid} /> を追加

const Card = ({ id, isActive, onClick, title, description, url }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <CardWrapper
      onClick={handleClick}
      isActive={isActive}
      style={{ backgroundImage: `url(${url})` }}
    >
      <Title isActive={isActive}>{title}</Title>
      <Description isActive={isActive}>{description}</Description>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Card;
