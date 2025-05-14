import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../store/cartSlice';
import { selectProducts } from '../../../store/productsSlice';

const ProductList: React.FC = () => {
  const cart = useSelector(selectCart);
  const products = useSelector(selectProducts);

  return (
    <section aria-label="Product table">
      {products.map(product => {
        const isInCart = cart.some(item => item.productId === product.id);
        
        return (
          <article key={product.id}>
            {isInCart && (
              <aside aria-label="Product status">
                In Cart
              </aside>
            )}
            
            <header>
              <h2>{product.name}</h2>
              <p aria-label="Monthly price">
                ${product.price}/month
              </p>
            </header>

            <section>
              <p>{product.description}</p>
            </section>

            <footer>
              <Link to={`/products/${product.id}`}>
                Learn More
              </Link>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default ProductList; 