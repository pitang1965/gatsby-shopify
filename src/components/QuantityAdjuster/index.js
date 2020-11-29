import React from 'react';
import { QuantityAdjusterWrapper, AdjusterButton } from './styles';

export const QuantityAdjuster = ({ item, onAdjust }) => {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ quantity: -1, variantId: item.variant.id });
  };

  const handleIncrementQuantity = () => {
    onAdjust({ quantity: 1, variantId: item.variant.id });
  };

  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  );
};
