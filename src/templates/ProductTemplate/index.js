import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'components';
import { Grid } from './styles';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
    }
  }
`;

export default function ProductTemplate(props) {
  console.log(props);
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
        </div>
        <div>
          画像
        </div>
      </Grid>
    </Layout>
  );
}
