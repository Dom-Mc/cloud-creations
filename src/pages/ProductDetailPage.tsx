import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <div style={{ 
        maxWidth: '600px',
        margin: '20px 0',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}>
        <h2>${product.price}/month</h2>
        <p>{product.description}</p>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate('/checkout')}>Subscribe Now</button>
          <button onClick={() => navigate('/products')} style={{ marginLeft: '10px' }}>
            Back to Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 