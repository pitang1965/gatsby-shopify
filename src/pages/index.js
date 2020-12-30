import React, { useContext } from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="Over 40 Web Shopホームページ" title="ホームページ" />
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== '店長のおすすめ'
        )}
      />
      {!!collections.find(
        collection => collection.title === '店長のおすすめ'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
