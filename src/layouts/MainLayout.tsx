import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../components/ui/navigation/Navigation';
import {
  LayoutContainer,
  Header,
  Main
} from './MainLayout.styles';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <LayoutContainer className={isLandingPage ? 'landing-page' : ''}>
      <Header $isLandingPage={isLandingPage}>
        <Navigation />
      </Header>
      <Main $isLandingPage={isLandingPage}>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};

export default MainLayout; 