import React, { useContext } from 'react';
import { Layout, Filters, ProductsGrid } from 'components';
import ProductContext from 'context/ProductContext';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const AllProducts = () => {
  const { products, collections } = useContext(ProductContext);

  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};
      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  console.log(collectionProductMap);

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true; // その商品がそのカテゴリに含まれている場合
        }
      }
      return false; // その商品がどのカテゴリにも含まれていない場合
    }

    return true; // カテゴリが何も選ばれていない場合
  };

  const filteredProducts = products.filter(filterByCategory);

  return (
    <Layout>
      <h4>{filteredProducts.length}個の商品</h4>
      <Content>
        <Filters />
        <div>
          <ProductsGrid products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

export default AllProducts;
