import React from 'react';
import { Layout, Seo } from 'components';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>ページが見つかりません</h1>
    <p>
      申し訳ございません。入力されたウェブアドレスは当店の有効なページではありません。
    </p>
  </Layout>
);

export default NotFoundPage;
