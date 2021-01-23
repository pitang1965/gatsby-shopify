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

const TextCode = styled.div`
  font-size: 85%;
  color: rgb(55, 53, 47);
  padding: 0.5rem;
`;

const RefundPolicy = () => {
  return (
    <Layout>
      <SEO description="Over 40 Web Shop" title="返金ポリシー" />
      <Title>返金ポリシー</Title>
      <Heading1>1. 不具合（事故品）による返品対応</Heading1>
      <p>
        商品の発送及び梱包には、万全を尽くしておりますが、万一「不良品・弊社の発送間違え」或いは「配送途中の破損」などの事故（以降「事故品」といいます）がございましたら、速やかに弊社までご連絡ください。直ちに回収用の資材をお届けし、代品を発送させて頂きます。お手数ですが、お届けする回収用資材にてそのままの状態で、返送いただけますように、よろしくお願い申し上げます。
      </p>
      <p>
        弊社へのご連絡の方法は、下記「3.連絡と返品の方法について」を参考ください。
      </p>
      <Heading1>2. お客様のご都合（自己都合）による返品について</Heading1>
      <p>
        ご注文の商品が到着後に「お客様のご都合による返品」をご希望の場合は、配達完了日から8日以内で、且つ商品が未開封の時のみ返品および返金を受け付けいたします。また、その際は恐縮ですが、商品ご返品の送料および、ご返金の際の振込手数料は、お客様にてご負担願います。
      </p>
      <p>
        尚、ご返金は返品確認後にお手続きをさせていただきます。予めご了承ください。
      </p>
      <Heading1>3.連絡と返品の方法について</Heading1>
      <p>以下の項目をコピーして、info@xxx.jp へメールください。</p>

      <TextCode>
        <div>1. ご注文番号：</div>
        <div>2. 氏名：</div>
        <div>3. 住所：</div>
        <div>4. 選択：「事故品」「自己都合」← どちらかを消してください。</div>
        <div>5. 理由：</div>
        <div>6. 電話：</div>
        <div>7. コメント：</div>
      </TextCode>

      <p>※内容に応じて、当方より再度お尋ねする場合がございます。</p>
    </Layout>
  );
};

export default RefundPolicy;
