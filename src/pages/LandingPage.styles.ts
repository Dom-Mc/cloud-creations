import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.2;
  background: linear-gradient(to right, #fff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubHeading = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`; 