// やりたいこと
// Shopify で商品又はコレクションが変更されたらNetlifyでリビルド(gatsby build)したい。
// ただし、在庫数のみの変更の場合はリビルドしたくない
// リビルドする必要性があるかどうかを判断するため、あらかじめ在庫数を除いた商品データを
// Fauna に格納しておきそれと比較する。
//
// 本関数は Shopify から Netlify functions 経由で呼び出される。

const faunadb = require('faunadb');
const verifyWebhookIntegrity = require('shopify-verify-webhook');
const axios = require('axios');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const rebuild = () => {
  axios.post(process.env.NETLIFY_BUILD_URL);
  console.log('リビルドを実行');
};

exports.handler = function (event, context, callback) {
  const isValid = verifyWebhookIntegrity(
    process.env.SHOPIFY_WEB_HOOK_KEY,
    event.headers['x-shopify-hmac-sha256'],
    event.body
  );

  // Shopifyから呼ばれたか否か
  if (isValid) {
    const body = JSON.parse(evnet.body);
    const { id } = body;

    // Faunaに格納してあるデータと比較するために余計なデータを削ぎ落とす
    delete body.updated_at;
    body.variants.forEach(variant => {
      delete variant.updated_at;
      delete variant.inventory_quantity;
      delete variant.old_inventory_quantity;
    });
    const bodyString = JSON.stringify(body);

    client
      .query(q.Get(q.Match(q.Index('product_by_id', id))))
      .then(result => {
        // Faunaから取得したデータから変更されている（リビルド必要）かどうか
        if (result.data.product !== bodyString) {
          rebuild();

          // Faunaのデータを更新する（リビルド必要）
          client
            .query(
              q.Update(result.ref, {
                data: { product: bodyString },
              })
            )
            .then(() => {
              rebuild();
            })
            .catch(e => {
              console.log('Fauna DBのデータの更新に失敗: ', e);
            });
        } else {
          console.log('リビルドは不要');
        }
      })
      .catch(() => {
        // Faunaにデータを新規に格納する（リビルド必要）
        client
          .query(
            q.Create(q.Collection('products'), {
              data: { id, product: bodyString },
            })
          )
          .then(() => {
            rebuild();
          })
          .catch(e => {
            console.log('Fauna DBへのデータの追加に失敗: ', e);
          });
      });
  } else {
    callback(null, {
      statusCode: 403,
      body: 'Error',
    });
    console.log('Shopify以外から呼ばれた');
  }
};
