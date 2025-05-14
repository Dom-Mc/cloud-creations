import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductDetail from '../components/features/products/product-detail/ProductDetail';
import Button from '../components/ui/Button';

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const product = useSelector((state: RootState) => 
    state.products.products.find(p => p.slug === slug)
  );

  if (!product) return <main>Product not found</main>;

  return (
    <main>
      <ProductDetail product={product} />
      <nav>
        <Button variant="outlined" onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </nav>
    </main>
  );
};

export default ProductDetailPage; 