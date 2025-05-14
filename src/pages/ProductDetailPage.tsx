import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectProductBySlug } from '../store/productsSlice';
import ProductDetail from '../components/features/products/product-detail/ProductDetail';

const DetailContainer = styled.div`
  padding-bottom: 40px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = useSelector(selectProductBySlug(slug || ''));

  if (!product) return <DetailContainer>Product not found</DetailContainer>;

  return (
    <DetailContainer>
      <ProductDetail product={product} />
    </DetailContainer>
  );
};

export default ProductDetailPage; 