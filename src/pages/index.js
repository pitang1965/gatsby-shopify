import React, { useContext } from 'react';
import {
  SEO,
  Layout,
  ExpandingCards,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO description="Over 40 Web Shop" title="ホームページ" />
      <ExpandingCards />
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
