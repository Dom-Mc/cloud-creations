import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header<{ $isLandingPage: boolean }>`
  position: ${({ $isLandingPage }) => $isLandingPage ? 'absolute' : 'relative'};
  width: 100%;
  z-index: 10;
`;

export const Main = styled.main<{ $isLandingPage: boolean }>`
  flex: 1;
  background: ${({ $isLandingPage }) => $isLandingPage ? 'transparent' : '#ffffff'};
`; 