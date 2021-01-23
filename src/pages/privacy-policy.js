import React from 'react';
import styled from 'styled-components';
import { SEO, Layout } from 'components';

const organization = 'ピータン株式会社';
const shopName = 'Over 40 Web Shop';
const contactInfo = '電話番号：090-9999-9999 (9:00～17:00)';

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

const Text = styled.p`
  margin-left: calc(2rem / 2);
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const NumberdList1 = styled.ol`
  margin-left: 2rem;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 0;
  list-style-type: decimal;
  list-style-position: outside;
  list-style-image: none;

  li {
    margin-bottom: calc(2rem / 2);
  }
}
`;

const NumberdList2 = styled.ol`
  margin-left: 2rem;
  margin-bottom: calc(2rem / 2);
  margin-top: calc(2rem / 2);
  list-style-type: decimal;
  list-style: none;

  li {
    counter-increment: item;
    position: relative;
    &:before {
      content: counters(item, ".") ")  ";
  display: inline-block;
  position: absolute;
  left: -2rem;
`;

const TermsOfService = () => {
  return (
    <Layout>
      <SEO description="Over 40 Web Shop" title="プライバシーポリシー" />
      <Title>プライバシーポリシー</Title>
      <Text>
        {organization}
        （以下「当社」といいます）は、個人情報の重要性を十分に認識し、個人情報を適切に取り扱うことを当社にとっての重要な責務と考えます。当社は以下の方針を掲げ、これを徹底し、個人情報の保護に努めてまいります。
      </Text>
      <Heading1>1. 法令の遵守</Heading1>
      <Text>
        当社は、個人情報を取り扱うに当り、個人情報の保護に関する法令等を遵守します。
      </Text>
      <Heading1>2. 個人情報の取得</Heading1>
      <NumberdList1>
        <li>
          当社は、お客様により良いサービスをご提供するため、アンケート・電子メール配信サービス・資料配布、各種懸賞、メール等による事業に関する各種お申し出・お問い合わせ受け付けなどを行います。その際、必要な範囲でお客様の個人情報を取得することがあります。
        </li>
        <li>
          お客様の個人情報を書面（ホームページ上の画面や電子メール等を含む。以下同じ）にて直接取得する場合には、あらかじめ利用目的をお知らせします。
        </li>
      </NumberdList1>
      <Heading1>3. 個人情報の管理・保護について</Heading1>
      <NumberdList1>
        <li>
          当社がお客様の個人情報を管理する際、適切な管理を行い、外部への流出防止に努めます。
        </li>
        <li>
          外部からの不正アクセス・紛失・破壊・改ざんなどの危険に対しては、適切かつ合理的なレベルの安全対策を実施し、お客様の個人情報の保護に努めます。
        </li>
      </NumberdList1>
      <Heading1>4. 個人情報の利用</Heading1>
      <NumberdList1>
        <li>
          当社は、お客様の個人情報を、下記の利用目的の範囲内で利用し、お客様の権利を損なわないよう、十分配慮します。
          <NumberdList2>
            <li>商品の発送</li>
            <li>懸賞等の当選者への連絡、賞品の発送</li>
            <li>商品情報、キャンペーン情報、イベント情報のご案内</li>
            <li>メールマガジンの配信</li>
            <li>お客様からのお問い合わせへの対応</li>
            <li>アンケート調査</li>
            <li>当社施設見学時の対応</li>
            <li>個人を特定しない形での統計的処理</li>
            <li>お客様から個人情報を取得する際に当社がお知らせした利用目的</li>
          </NumberdList2>
        </li>
        <li>
          お客様から個人情報を取得した場合、当社からの情報を電子メール、その他の方法でお届けすることがあります。お客様がこれらの情報配信を希望されない場合は、ご連絡いただければ、情報の配信を停止します。
        </li>
      </NumberdList1>
      <Heading1>5. 個人情報の第三者への提供</Heading1>
      <NumberdList1>
        <li>
          当社は、お客様の個人情報を、お客様ご自身の同意のある場合または法令（外国の法令を含みます）に基づき正当に開示を求められた場合を除き、第三者に開示・提供することはありません。
        </li>
        <li>
          委託先の外部業者へ開示する場合でも、秘密保持契約による義務付けの方法等により、その業者からの漏えい・再提供の防止などを図ります。
        </li>
        <li>
          統計的情報を他者に提供する場合は、お客様個人を識別できないように、統計情報のみを提供します。
        </li>
      </NumberdList1>
      <Heading1>6. 共同利用</Heading1>
      <Text>
        当社は、お客様から取得した個人情報を以下の通り、関係会社にて共同利用することがあります。
      </Text>
      <Heading1>7. 個人情報の開示及び修正等</Heading1>
      <NumberdList1>
        <li>
          当社は、お客様から自らの個人情報の開示・修正・削除のお申し出があった場合、合理的な範囲で開示・修正・削除を行います。
        </li>
        <li>
          ただし他のお客様の生命・身体・財産その他の利益を害するおそれのある場合、当社の業務遂行に著しく支障をきたすと判断した場合、または他の法令に違反する場合は、この限りではありません。
        </li>
      </NumberdList1>
      <Heading1>8. 改善</Heading1>
      <Text>
        お客様の個人情報の取扱いにつきましては、上記各項目の内容を適宜見直し、改善してまいります。したがって、本ポリシーが予告なしに変更されることがありますので、ご了承ください。
      </Text>
      <Heading1>9. お問い合わせ</Heading1>
      <Text>
        個人情報の開示及び修正等の請求、お問い合わせ、苦情につきましては、当社「{shopName}」
        {contactInfo}で受け付けております。
      </Text>
    </Layout>
  );
};

export default TermsOfService;
