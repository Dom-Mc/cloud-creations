import React from 'react';
import { Link } from 'react-router-dom';
import CartNavItem from './CartNavItem';

const Navigation: React.FC = () => {
  return (
    <header role="banner">
      <nav aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/">Cloud Creation</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <CartNavItem />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation; 