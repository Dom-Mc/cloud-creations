import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '../../../ui/Typography';
import styled from 'styled-components';

const FeaturesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 24px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px;
  
  svg {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 4px;
    font-weight: 700;
    stroke-width: 2;
  }
`;

const FeatureText = styled(Typography)`
  font-weight: 500;
`;

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <section>
      <Typography variant="h3" gutterBottom>Features</Typography>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <CheckIcon />
            <FeatureText>{feature}</FeatureText>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </section>
  );
};

export default ProductFeatures; 