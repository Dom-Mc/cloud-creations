import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cartSlice';
import { selectProducts } from '../../../store/productsSlice';
import { Product } from '../../../types/product';
import { CartItem } from '../../../types/cart';
import Typography from '../../ui/Typography';
import {
  ProductGrid,
  ProductLink,
  ProductCard,
  Description,
  Price,
  ProductStatus,
  Features,
  FeatureList
} from './ProductList.styles';

const ProductList: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  return (
    <ProductGrid>
      {products.map((product: Product) => {
        const isInCart = cartItems.some((item: CartItem) => item.id === product.id);
        
        return (
          <ProductLink key={product.id} to={`/products/${product.slug}`}>
            <ProductCard $interactive>
              {isInCart && (
                <ProductStatus aria-label="Product status">
                  In Cart
                </ProductStatus>
              )}
              
              <header>
                <Typography variant="h3" gutterBottom>
                  {product.name}
                </Typography>
                <Price>
                  ${product.price}/month
                </Price>
              </header>

              <section>
                <Description variant="body1">
                  {product.description}
                </Description>

                <Features>
                  <Typography variant="subtitle2" gutterBottom style={{ color: '#000', marginBottom: '1rem' }}>
                    Key Features
                  </Typography>
                  <FeatureList>
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </FeatureList>
                </Features>
              </section>
            </ProductCard>
          </ProductLink>
        );
      })}
    </ProductGrid>
  );
};

export default ProductList; 