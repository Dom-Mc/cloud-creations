import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeFromCart, 
  updateQuantity,
  updateBillingPeriod,
  selectCartItems,
  selectCartTotal
} from '../../../store/cartSlice';
import { formatPrice } from '../../../utils/priceCalculations';
import { Product } from '../../../types/product';
import { CartItem } from '../../../types/cart';
import { BillingPeriod } from '../../../types/billing';
import { ANNUAL_DISCOUNT_PERCENTAGE } from '../../../constants/pricing';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';
import Typography from '../../ui/Typography';
import EmptyCart from './EmptyCart';
import {
  PageContainer,
  ContentSection,
  CartItemCard,
  CartItemArticle,
  CartFooter,
  TotalSection,
  TaxText,
  FlexBox,
  InputWrapper,
  FormGroup
} from './CartCheckout.styles';

interface CartCheckoutProps {
  products: Product[];
  onOpenPaymentModal: () => void;
}

const billingOptions = [
  { value: 'month', label: 'Monthly' },
  { value: 'year', label: `Yearly (Save ${ANNUAL_DISCOUNT_PERCENTAGE}%)` }
];

const CartCheckout: React.FC<CartCheckoutProps> = ({ products, onOpenPaymentModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartTotal);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleBillingPeriodChange = (id: string, value: string) => {
    dispatch(updateBillingPeriod({ id, billingPeriod: value as BillingPeriod }));
  };

  // Show empty cart state if no items
  if (cartItems.length === 0) {
    return (
      <PageContainer>
        <EmptyCart />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>Review Your Cart</Typography>

      <ContentSection>
        <CartItemCard>
          <section>
            {cartItems.map((item: CartItem, index: number) => {
              const product = products.find(p => p.id === item.id);
              if (!product) return null;

              const itemSubtotal = item.price * item.quantity;
              const isLast = index === cartItems.length - 1;

              return (
                <CartItemArticle key={item.id} isLast={isLast}>
                  <Typography variant="h3" gutterBottom>
                    {item.name}
                  </Typography>
                  
                  <FormGroup>
                    <FlexBox gap={3} align="center">
                      <InputWrapper width="150px">
                        <Input
                          id={`quantity-${item.id}`}
                          label="Licenses"
                          type="number"
                          min={1}
                          value={item.quantity.toString()}
                          onChange={(value) => handleQuantityChange(item.id, parseInt(value) || 1)}
                          fullWidth
                        />
                      </InputWrapper>
                      <InputWrapper width="200px">
                        <Select
                          id={`billing-${item.id}`}
                          label="Billing Period"
                          value={item.billingPeriod}
                          options={billingOptions}
                          onChange={(value) => handleBillingPeriodChange(item.id, value)}
                          fullWidth
                        />
                      </InputWrapper>
                    </FlexBox>
                  </FormGroup>

                  <FlexBox justify="space-between" align="center">
                    <div>
                      <Typography component="span">Subtotal:</Typography>
                      <Typography component="span" style={{ fontWeight: 'bold', marginLeft: '12px' }}>
                        ${formatPrice(itemSubtotal)}/{item.billingPeriod}
                      </Typography>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => handleRemove(item.id)}
                      color="error"
                    >
                      Remove
                    </Button>
                  </FlexBox>
                </CartItemArticle>
              );
            })}
          </section>

          <CartFooter>
            <TotalSection>
              <Typography variant="h3">Total:</Typography>
              <Typography variant="h3">
                ${formatPrice(subtotal)}
                <TaxText variant="body2">+ tax</TaxText>
              </Typography>
            </TotalSection>

            <FlexBox justify="flex-end" gap={2}>
              <Button
                variant="contained"
                onClick={onOpenPaymentModal}
              >
                Proceed to Payment
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/products')}
              >
                Back to Products
              </Button>
            </FlexBox>
          </CartFooter>
        </CartItemCard>
      </ContentSection>
    </PageContainer>
  );
};

export default CartCheckout; 