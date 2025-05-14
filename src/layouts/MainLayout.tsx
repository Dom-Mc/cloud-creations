import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/ui/navigation/Navigation';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header<{ $isLandingPage: boolean }>`
  background: ${({ theme, $isLandingPage }) => $isLandingPage ? 'transparent' : theme.palette.background.default};
`;

const Main = styled.main<{ $isLandingPage: boolean }>`
  flex: 1;
  width: 100%;
  ${({ $isLandingPage }) => !$isLandingPage && `
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  `}
`;

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <LayoutContainer className={isLandingPage ? 'landing-page' : ''}>
      <Header $isLandingPage={isLandingPage}>
        <Navigation />
      </Header>
      <Main $isLandingPage={isLandingPage}><Outlet /></Main>
    </LayoutContainer>
  );
};

export default MainLayout; 