import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <h1>Subscription Plans</h1>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            width: '200px'
          }}>
            <h2>{product.name}</h2>
            <p>${product.price}/month</p>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`}>
              <button>Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 