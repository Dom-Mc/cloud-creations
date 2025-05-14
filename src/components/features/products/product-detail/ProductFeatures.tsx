import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <section>
      <h3>Features</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeatures; 