import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../store/cartSlice';

const CartNavItem: React.FC = () => {
  const cart = useSelector(selectCart);

  return (
    <Link 
      to="/checkout" 
      role="button"
      aria-label={`Shopping cart with ${cart.length} items`}
    >
      Cart
      {cart.length > 0 && (
        <span aria-hidden="true">
          {cart.length}
        </span>
      )}
    </Link>
  );
};

export default CartNavItem; 