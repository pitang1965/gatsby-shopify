import React, { useContext } from 'react';
import { Seo, Layout, Filters, ProductsGrid } from 'components';
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
  const searchTerm = qs.s;

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

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <Seo title="全ての商品" description="Over 40 Web Shop" />
      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          <strong>"{searchTerm}"</strong> で検索
        </h3>
      )}
      {!!filteredProducts.length && <h4>{filteredProducts.length}個の商品</h4>}
      <Content>
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>"{searchTerm}"</span>&nbsp;
              <span>の検索に一致する商品はありませんでした。</span>
            </h3>
            <div>
              キーワードが正しく入力されていても一致する商品がない場合は、別の言葉をお試しください。
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default AllProducts;
