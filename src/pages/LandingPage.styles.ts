import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 2rem;
`;

export const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.2;
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`; 