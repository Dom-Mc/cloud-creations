import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemsMap } from '../../../store/cartSlice';
import { selectProducts } from '../../../store/productsSlice';
import Card from '../../ui/Card';
import Typography from '../../ui/Typography';
import styled from 'styled-components';

const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px 0;
`;

const ProductStatus = styled.aside`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
  cursor: pointer;
`;

const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  margin-top: 8px;
`;

const ProductList: React.FC = () => {
  const cartItemsMap = useSelector(selectCartItemsMap);
  const products = useSelector(selectProducts);

  return (
    <ProductGrid aria-label="Product table">
      {products.map(product => {
        const isInCart = Boolean(cartItemsMap[product.id]);
        
        return (
          <ProductLink key={product.id} to={`/products/${product.slug}`}>
            <Card $interactive>
              {isInCart && (
                <ProductStatus aria-label="Product status">
                  In Cart
                </ProductStatus>
              )}
              
              <header>
                <Typography variant="h3" gutterBottom>
                  {product.name}
                </Typography>
                <Price variant="subtitle1" aria-label="Monthly price">
                  ${product.price}/month
                </Price>
              </header>

              <section>
                <Typography>
                  {product.description}
                </Typography>
              </section>
            </Card>
          </ProductLink>
        );
      })}
    </ProductGrid>
  );
};

export default ProductList; 