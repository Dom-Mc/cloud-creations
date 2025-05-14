import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../../store/cartSlice';

const CartNavItem: React.FC = () => {
  const itemCount = useSelector(selectCartItemCount);

  return (
    <Link 
      to="/checkout" 
      role="button"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      Cart
      {itemCount > 0 && (
        <span aria-hidden="true">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartNavItem; 