import React from 'react';
import Typography from '../../../ui/Typography';
import styled from 'styled-components';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 16px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.palette.success.main};
    font-weight: bold;
  }
`;

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>Features</Typography>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            {feature}
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </div>
  );
};

export default ProductFeatures; 