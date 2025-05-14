import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/features/products/ProductList';
import Typography from '../components/ui/Typography';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Subtitle = styled(Typography)`
  color: #666;
  max-width: 600px;
  margin: 1rem auto 0;
`;

const TestimonialsSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 0;
  background: #f8f9fa;
  border-radius: 16px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialCard = styled.div`
  text-align: center;
  padding: 1.5rem;

  .quote {
    font-size: 1.125rem;
    font-style: italic;
    margin-bottom: 1rem;
    color: #333;
  }

  .author {
    font-weight: 500;
    color: #000;
  }

  .company {
    color: #666;
    font-size: 0.875rem;
  }
`;

const ProductsPage: React.FC = () => {
  return (
    <PageContainer>
      <Header>
        <Typography variant="h1" gutterBottom>
          Available Products
        </Typography>
        <Subtitle variant="body1">
          Choose from our range of enterprise-grade cloud services designed to scale with your business needs
        </Subtitle>
      </Header>

      <ProductList />

      <TestimonialsSection>
        <Typography variant="h2" align="center" gutterBottom style={{ marginBottom: '3rem' }}>
          What Our Customers Say
        </Typography>
        <TestimonialsGrid>
          <TestimonialCard>
            <div className="quote">
              "The scalability and reliability of their cloud services have been instrumental in our growth."
            </div>
            <div className="author">Sarah Chen</div>
            <div className="company">CTO at TechFlow</div>
          </TestimonialCard>
          <TestimonialCard>
            <div className="quote">
              "Their infrastructure has allowed us to focus on innovation rather than maintenance."
            </div>
            <div className="author">Michael Rodriguez</div>
            <div className="company">Lead Engineer at DataScale</div>
          </TestimonialCard>
          <TestimonialCard>
            <div className="quote">
              "The best cloud platform we've used. The support team is incredibly responsive."
            </div>
            <div className="author">Emma Thompson</div>
            <div className="company">Founder at CloudNative</div>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>
    </PageContainer>
  );
};

export default ProductsPage; 