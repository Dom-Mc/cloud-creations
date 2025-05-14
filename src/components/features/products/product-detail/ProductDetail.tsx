import React from 'react';
import { Product } from '../../../../types/product';
import ProductPlan from './ProductPlan';
import ProductFeatures from './ProductFeatures';
import Typography from '../../../ui/Typography';
import {
  DetailCard,
  DetailHeader,
  DetailSection
} from './ProductDetail.styles';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <DetailCard>
      <DetailHeader>
        <Typography variant="h2" gutterBottom>{product.name}</Typography>
      </DetailHeader>
      
      <DetailSection>
        <Typography gutterBottom>{product.description}</Typography>
        <ProductFeatures features={product.features} />
        <ProductPlan product={product} />
      </DetailSection>
    </DetailCard>
  );
};

export default ProductDetail; 