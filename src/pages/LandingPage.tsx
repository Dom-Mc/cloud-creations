import React from 'react';
import Typography from '../components/ui/Typography';
import Button from '../components/ui/Button';
import {
  PageContainer,
  HeroSection,
  MainHeading,
  CTAContainer
} from './LandingPage.styles';

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <MainHeading>
          Cloud Solutions for Modern Businesses
        </MainHeading>
        <Typography variant="h2" gutterBottom>
          Scalable, secure, and reliable cloud services
        </Typography>
        <CTAContainer>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Learn More
          </Button>
        </CTAContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default LandingPage; 