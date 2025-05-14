import React from 'react';
import { Link } from 'react-router-dom';
import CartNavItem from './CartNavItem';
import {
  Nav,
  Logo,
  RightSection,
  NavLinks
} from './styles';

const Navigation: React.FC = () => {
  return (
    <header role="banner">
      <Nav aria-label="Main navigation">
        <Logo to="/">
          Cloud Creations
        </Logo>
        <RightSection>
          <NavLinks>
            <Link to="/products">Products</Link>
            <CartNavItem />
          </NavLinks>
        </RightSection>
      </Nav>
    </header>
  );
};

export default Navigation; 