import React from 'react';
import { ProductTileWrapper, Title, Description, Price } from './styles';
import { GatsbyImage } from "gatsby-plugin-image";
import { StyledLink } from '../StyledLink';

export const ProductTile = ({
  image,
  title,
  description,
  minPrice,
  handle,
}) => {
  return (
    <ProductTileWrapper>
      <GatsbyImage image={image} alt={ title }/>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>&yen;{parseInt(minPrice).toLocaleString()} より</Price>
      <StyledLink to={`/products/${handle}`}>詳しくはこちら</StyledLink>
    </ProductTileWrapper>
  );
};
