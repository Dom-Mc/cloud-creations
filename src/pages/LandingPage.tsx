import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/ui/Button';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: 0;
  background: #000000;
  position: relative;
`;

const MainHeading = styled.h1`
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 1000px;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const PrimaryButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  &:hover {
    background: #f0f0f0;
  }
`;

const SecondaryButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const LandingPage: React.FC = () => {
  return (
    <PageContainer className="landing-page">
      <HeroSection>
        <MainHeading>
          Cloud services that<br />
          scale with your business
        </MainHeading>
        <CTAContainer>
          <Link to="/products">
            <PrimaryButton>
              Browse Products
              <span>→</span>
            </PrimaryButton>
          </Link>
          <Link to="/contact">
            <SecondaryButton>
              Contact Sales
            </SecondaryButton>
          </Link>
        </CTAContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default LandingPage; 