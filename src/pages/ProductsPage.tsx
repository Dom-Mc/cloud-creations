import React from 'react';
import ProductList from '../components/features/products/ProductList';
import Typography from '../components/ui/Typography';
import {
  PageContainer,
  Header,
  Subtitle,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard
} from './ProductsPage.styles';

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