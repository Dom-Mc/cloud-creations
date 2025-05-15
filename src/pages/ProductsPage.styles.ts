import styled from 'styled-components';
import Typography from '../components/ui/Typography';

export const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled(Typography)`
  color: #666;
`;

export const TestimonialsSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 0;
  background: #f8f9fa;
  border-radius: 16px;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const TestimonialCard = styled.div`
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