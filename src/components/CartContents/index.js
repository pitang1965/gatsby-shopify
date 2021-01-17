import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import CartContext from 'context/CartContext';
import { Button } from '../Button/';
import {
  CartTitle,
  Note,
  CartItem,
  CartHeader,
  CartFooter,
  Footer,
} from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <CartTitle>ショッピングカート</CartTitle>
      <Note>
        デモサイトなので実際の商品は届きませんが、購入シミュレーションは可能です。
      </Note>
      <Note>カード番号:1、カードの名義人: Bogus Gateway をお使いください</Note>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>商品名</div>
          <div>価格</div>
          <div>数量</div>
          <div>合計</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>&yen;{parseInt(item.variant.price).toLocaleString()}</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>
            &yen;{(item.quantity * item.variant.price).toLocaleString()}
          </div>
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>小計: </strong>
          </div>
          <div>
            <span>&yen;{parseInt(checkout?.totalPrice).toLocaleString()}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && (
        <h4>お客様のShopifyカートに商品はありません。</h4>
      )}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>お買い物を続ける</Button>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              レジに進む
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
};
