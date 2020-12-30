import React from 'react';
import { Layout, CartContents, SEO } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <SEO
        description="Over 40 Web Shopショッピングカート"
        title="ショッピングカート"
      />
      <CartContents />
    </Layout>
  );
};

export default CartPage;
