import React from 'react';
import { Product } from '../../../../types/product';
import ProductPlan from './ProductPlan';
import ProductFeatures from './ProductFeatures';
import Card from '../../../ui/Card';
import Typography from '../../../ui/Typography';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <Card>
      <header>
        <Typography variant="h2" gutterBottom>{product.name}</Typography>
      </header>
      
      <section>
        <Typography gutterBottom>{product.description}</Typography>
        <ProductFeatures features={product.features} />
        <ProductPlan product={product} />
      </section>
    </Card>
  );
};

export default ProductDetail; 