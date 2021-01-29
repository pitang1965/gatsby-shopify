import React from 'react';
import styled from 'styled-components';
import { SEO, Layout } from 'components';
import { graphql, useStaticQuery } from 'gatsby';

const Title = styled.div`
  font-size: 200%;
  font-weight: bold;
`;

const InfoTable = styled.div`
  border: 1px solid black;
`;

const Cell = styled.div`
  padding: 0.5rem;
  border: 1px solid black;
  &:first-child {
    background-color: #f7f6f3;
  }
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const IndicationForAct = () => {
  const {
    site: {
      meta: { seller, operationManager, address, tel, email, url },
    },
  } = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          seller
          operationManager
          address
          tel
          email
          url
        }
      }
    }
  `);

  const items = [
    { name: '販売業者', description: seller },
    { name: '運営責任者', description: operationManager },
    { name: '住所', description: address },
    { name: '電話番号', description: tel },
    { name: 'メールアドレス', description: email },
    { name: 'URL', description: url },
    {
      name: '商品以外の必要代金',
      description: [
        '【送料】',
        'ご注文の合計金額が3,000円(税抜)未満の場合は、沖縄県は1,000円(税込)、沖縄県以外は600円(税込)となります。',
        'ご注文の合計金額が3,000円(税抜)以上の場合、送料無料とさせていただきます。',
        '【代金引換】',
        '代引手数料をご負担いただきます(税抜300円)。',
      ],
    },
    { name: '注文方法', description: '本サイトよりご注文。' },
    { name: '支払方法', description: ['・クレジットカード払い', '・代金引換'] },
    { name: '支払期限', description: '各種オンライン決済でお支払いください。' },
    {
      name: '引渡し時期',
      description: [
        '受注後7日以内/宅急便',
        '※ 交通事情によりお届けできない場合もありますのであらかじめご了承ください。',
        '※ 国内のみのお届けとさせていただきます。',
      ],
    },
    {
      name: '返品・交換について',
      description: [
        '【返品の取扱条件】',
        '輸送による商品の破損および発送ミスがありました場合のみ。',
        'お手数ですが到着後14日以内に「送料着払い」でご返送ください。',
        '【不良品の取扱条件】',
        '商品受け取り時に必ず商品の確認をお願いいたします。',
        '返品・交換のお申し出は、商品の到着後、14日以内にメールまたは電話でご連絡ください。',
        '原則として商品の返品、交換は未開封のものに限らせていただきます。',
        '万一、当社に起因する商品の不良、破損があった場合、返品の送料は当社負担とさせていただきます。',
        'お客様事由に起因する返品・交換の場合、送料はお客様負担となります。',
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        description="Over 40 Web Shop"
        title="特定商取引に関する法律に基づく表記"
      />
      <Title>特定商取引に関する法律に基づく表記</Title>
      <InfoTable>
        {items.map(item => (
          <InfoItem key={item.name}>
            <Cell>{item.name}</Cell>
            {Array.isArray(item.description) ? (
              <Cell>
                {item.description.map(desc => (
                  <div>{desc}</div>
                ))}
              </Cell>
            ) : (
              <Cell>{item.description}</Cell>
            )}
          </InfoItem>
        ))}
      </InfoTable>
    </Layout>
  );
};

export default IndicationForAct;
