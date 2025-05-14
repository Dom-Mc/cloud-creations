import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import {
  PageContainer,
  HeroSection,
  MainHeading,
  SubHeading,
  CTAContainer
} from './LandingPage.styles';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBrowseProducts = () => {
    navigate('/products');
  };

  return (
    <PageContainer>
      <HeroSection>
        <MainHeading>
          Cloud Solutions for Modern Businesses
        </MainHeading>
        <SubHeading>
          Scalable, secure, and reliable cloud services designed to transform your business operations
        </SubHeading>
        <CTAContainer>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={handleBrowseProducts}
            style={{ minWidth: '160px', padding: '12px 24px' }}
          >
            Browse Products
          </Button>
          <Button 
            variant="outlined" 
            color="primary" 
            size="large"
            style={{ 
              minWidth: '160px', 
              padding: '12px 24px',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: '#fff'
            }}
          >
            Learn More
          </Button>
        </CTAContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default LandingPage; 