import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '../../ui/Button';
import {
  EmptyCartContainer,
  IconWrapper,
  StyledTypography,
  MessageWrapper,
  ButtonWrapper
} from './EmptyCart.styles';

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <EmptyCartContainer>
      <IconWrapper>
        <ShoppingCartIcon />
      </IconWrapper>
      <MessageWrapper>
        <StyledTypography 
          variant="h2" 
          style={{ marginBottom: '1rem' }}
        >
          Your Cart is Empty
        </StyledTypography>
        <StyledTypography 
          variant="body1"
          style={{ 
            color: 'rgba(0, 0, 0, 0.6)',
            lineHeight: 1.6,
            fontSize: '1.1rem'
          }}
        >
          Looks like you haven't added any products to your cart yet.
          Browse our products to find what you need.
        </StyledTypography>
      </MessageWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/products')}
        >
          Browse Products
        </Button>
      </ButtonWrapper>
    </EmptyCartContainer>
  );
};

export default EmptyCart; 