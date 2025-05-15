import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartItemCount } from '../../../store/cartSlice';
import { CartLink, CartBadge } from './styles';

const CartNavItem: React.FC = () => {
  const itemCount = useSelector(selectCartItemCount);

  return (
    <CartLink 
      to="/checkout" 
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCartIcon />
      {itemCount > 0 && (
        <CartBadge>{itemCount}</CartBadge>
      )}
    </CartLink>
  );
};

export default CartNavItem; 