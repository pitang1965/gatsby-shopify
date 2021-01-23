import React from 'react';
import styled from 'styled-components';
import { SEO, Layout } from 'components';

const Title = styled.div`
  font-size: 200%;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Heading1 = styled.div`
  font-size: 120%;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Heading2 = styled.div`
  font-size: 100%;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const ShippingPolicy = () => {
  return (
    <Layout>
      <SEO description="Over 40 Web Shop" title="配送ポリシー" />
      <Title>配送ポリシー</Title>
      <Heading1>配送について（国内）</Heading1>
      <Heading2>配送料金</Heading2>
      <p>
        商品により送料が変わります。詳しくは商品ページに記載がありますのでご確認ください。
      </p>
      <Heading2>お届けにかかる時間</Heading2>
      <p>
        商品により、発送までの期間が変わりますが、通常1〜4営業日以内に発送しております。
      </p>
      <p>
        ご注文内容に不備のある場合、自然災害等の交通事情がある場合、お客様がご不在の場合などには、所定のお届け日にお届けできない場合がございますので、その場合は連絡をさせていただきます。
      </p>
      <Heading1>配送について（海外）</Heading1>
      <p>現在海外発送には対応しておりません。ご了承くださいませ。</p>
    </Layout>
  );
};

export default ShippingPolicy;
