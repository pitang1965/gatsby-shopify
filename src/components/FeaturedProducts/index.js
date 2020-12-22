import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);
  const featuredCollection = collections.find(
    collection => collection.title === '店長のおすすめ'
  );

  return (
    <section>
      <h1>店長のおすすめ</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
};
