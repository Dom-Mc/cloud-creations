import React from 'react';
import { Product } from '../../../../types/product';
import ProductPlan from './ProductPlan';
import ProductFeatures from './ProductFeatures';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <article>
      <header>
        <h2>{product.name}</h2>
      </header>
      
      <section>
        <p>{product.description}</p>
        <ProductFeatures features={product.features} />
        <ProductPlan product={product} />
      </section>
    </article>
  );
};

export default ProductDetail; 