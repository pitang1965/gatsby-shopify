import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>ショッピングカート</h1>
      <CartHeader>
        <div>商品名</div>
        <div>価格</div>
        <div>数量</div>
        <div>合計</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>&yen;{item.variant.price.toLocaleString()}</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>
            &yen;{(item.quantity * item.variant.price).toLocaleString()}
          </div>
          <div><RemoveLineItem lineItemId={item.id}/></div>
        </CartItem>
      ))}
      <CartFooter>
        <div>
          <strong>小計: </strong>
        </div>
        <div>
          <span>&yen;{parseInt(checkout?.totalPrice).toLocaleString()}</span>
        </div>
      </CartFooter>
    </section>
  );
};
