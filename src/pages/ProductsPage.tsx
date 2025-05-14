import React from 'react';
import ProductList from '../components/features/products/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <main>
      <header>
        <h1>Available Products</h1>
      </header>
      <ProductList />
    </main>
  );
};

export default ProductsPage; 