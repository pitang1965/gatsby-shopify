import React, { useContext } from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export const Filters = () => {
  const { collections } = useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>カテゴリ</strong>
      {collections.map(collection => (
        <CategoryFilterItem
          key={collection.shopifyId}
          title={collection.title}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
};
