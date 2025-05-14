import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartItemCount } from '../../../store/cartSlice';
import { CartLink, CartBadge } from './styles';

const CartNavItem: React.FC = () => {
  const itemCount = useSelector(selectCartItemCount);
  const navigate = useNavigate();

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Cart clicked, navigating to /checkout');
    navigate('/checkout');
  };

  return (
    <CartLink 
      to="/checkout" 
      onClick={handleCartClick}
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