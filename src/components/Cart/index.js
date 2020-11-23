import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  console.log(checkout);

  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity += lineItem.quantity;
    });
  }

  const totalPrice = parseInt(
    checkout?.totalPrice || '0.',
    10
  ).toLocaleString();

  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuantity}個の商品 / 小計: &yen;{totalPrice}(税込み)
      </div>
    </CartWrapper>
  );
};
