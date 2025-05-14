import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartNavItem from './CartNavItem';
import {
  Nav,
  Logo,
  RightSection,
  NavLinks
} from './styles';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <Nav className={isLandingPage ? 'landing-page' : ''}>
      <Logo to="/">
        Cloud Creations
      </Logo>
      <RightSection>
        <NavLinks>
          <Link to="/products">Products</Link>
        </NavLinks>
        <CartNavItem />
      </RightSection>
    </Nav>
  );
};

export default Navigation; 