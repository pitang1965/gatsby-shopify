import React from 'react';
import { ProductTileWrapper, Title, Description, Price } from './styles';
import Img from 'gatsby-image';
import { StyledLink } from '../StyledLink';

export const ProductTile = ({
  imageFluid,
  title,
  description,
  minPrice,
  handle,
}) => {
  return (
    <ProductTileWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>&yen;{parseInt(minPrice).toLocaleString()} より</Price>
      <StyledLink to={`/products/${handle}`}>詳しくはこちら</StyledLink>
    </ProductTileWrapper>
  );
};
