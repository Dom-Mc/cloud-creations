import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Typography from '../../ui/Typography';
import Card from '../../ui/Card';

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ProductCard = styled(Card)`
  height: 100%;
  padding: 2rem;
  
  header {
    margin-bottom: 1.5rem;
  }

  section {
    flex: 1;
  }
`;

export const Description = styled(Typography)`
  color: #666;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled(Typography)`
  color: #000;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const ProductStatus = styled.aside`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #3B82F6;
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
`;

export const Features = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;

    &:before {
      content: "✓";
      color: #3B82F6;
      font-weight: bold;
    }
  }
`; 