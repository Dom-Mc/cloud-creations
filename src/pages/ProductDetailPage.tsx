import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductById } from '../store/productsSlice';
import ProductDetail from '../components/features/products/product-detail/ProductDetail';
import { RootState } from '../store/store';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = useSelector((state: RootState) => selectProductById(state, id || ''));
  if (!product) return <main>Product not found</main>;

  return (
    <main>
      <ProductDetail product={product} />
      <nav>
        <button type="button" onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </nav>
    </main>
  );
};

export default ProductDetailPage; 