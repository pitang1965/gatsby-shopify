import React from 'react';
import { ProductGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export const ProductsGrid = ({ products }) => {
  return (
    <ProductGridWrapper>
      {products.map(product => (
        <ProductTile
          key={product.shopifyId}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          title={product.title}
          description={product.description}
          minPrice={product.priceRange.minVariantPrice.amount}
          handle={product.handle}
        />
      ))}
    </ProductGridWrapper>
  );
};
