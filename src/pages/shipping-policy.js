import React from 'react';
import styled from 'styled-components';
import { Seo, Layout } from 'components';

const Title = styled.div`
  font-size: 200%;
  font-weight: bold;
  margin-bottom: 1rem;
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

const Text = styled.p`
  margin-left: calc(2rem / 2);
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const ShippingPolicy = () => {
  return (
    <Layout>
      <Seo description="Over 40 Web Shop" title="配送ポリシー" />
      <Title>配送ポリシー</Title>
      <Heading1>配送について（国内）</Heading1>
      <Heading2>配送料金</Heading2>
      <Text>
        商品により送料が変わります。詳しくは商品ページに記載がありますのでご確認ください。
      </Text>
      <Heading2>お届けにかかる時間</Heading2>
      <Text>
        商品により、発送までの期間が変わりますが、通常1〜4営業日以内に発送しております。
      </Text>
      <Text>
        ご注文内容に不備のある場合、自然災害等の交通事情がある場合、お客様がご不在の場合などには、所定のお届け日にお届けできない場合がございますので、その場合は連絡をさせていただきます。
      </Text>
      <Heading1>配送について（海外）</Heading1>
      <Text>現在海外発送には対応しておりません。ご了承くださいませ。</Text>
    </Layout>
  );
};

export default ShippingPolicy;
