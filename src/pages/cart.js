import React from 'react';
import { Layout, CartContents, Seo } from 'components';

const CartPage = () => {
  return (
    <Layout>
      <Seo
        description="Over 40 Web Shop"
        title="ショッピングカート"
      />
      <CartContents />
    </Layout>
  );
};

export default CartPage;
