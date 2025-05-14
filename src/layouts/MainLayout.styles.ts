import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette?.background?.default || '#fff'};
`;

export const Header = styled.header<{ $isLandingPage: boolean }>`
  width: 100%;
  z-index: 10;
  background: ${({ $isLandingPage }) => $isLandingPage ? '#000' : '#fff'};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const Main = styled.main<{ $isLandingPage: boolean }>`
  flex: 1;
  background: ${({ $isLandingPage }) => $isLandingPage ? '#000' : '#fff'};
  min-height: calc(100vh - 64px);
  position: relative;
  z-index: 1;
`; 