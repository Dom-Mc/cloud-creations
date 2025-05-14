import React, { useEffect } from 'react';
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
import {
  PageContainer,
  ContentSection,
  GlassCard,
  FlexBox,
  InputWrapper,
  FormGroup,
} from '../../styled';

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

  // Only navigate away if we're not in the payment flow
  useEffect(() => {
    const isPaymentModalOpen = document.querySelector('[role="dialog"]');
    if (cartItems.length === 0 && !isPaymentModalOpen) {
      navigate('/products');
    }
  }, [cartItems.length, navigate]);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleBillingPeriodChange = (id: string, value: string) => {
    dispatch(updateBillingPeriod({ id, billingPeriod: value as BillingPeriod }));
  };

  // Don't render cart UI if empty, but don't redirect if payment modal is open
  if (cartItems.length === 0) {
    return <PageContainer />; // Return empty container to maintain layout
  }

  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>Review Your Cart</Typography>

      <ContentSection>
        <GlassCard>
          <section>
            {cartItems.map((item: CartItem, index: number) => {
              const product = products.find(p => p.id === item.id);
              if (!product) return null;

              const itemSubtotal = item.price * item.quantity;

              return (
                <article key={item.id} style={{ marginBottom: index < cartItems.length - 1 ? '24px' : 0, paddingBottom: index < cartItems.length - 1 ? '24px' : 0, borderBottom: index < cartItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none' }}>
                  <Typography variant="h3" gutterBottom>
                    {item.name}
                  </Typography>
                  
                  <FormGroup>
                    <FlexBox gap={3} align="center">
                      <InputWrapper style={{ width: '150px' }}>
                        <Input
                          id={`quantity-${item.id}`}
                          label="Quantity"
                          type="number"
                          min={1}
                          value={item.quantity.toString()}
                          onChange={(value) => handleQuantityChange(item.id, parseInt(value) || 1)}
                          fullWidth
                        />
                      </InputWrapper>
                      <InputWrapper style={{ width: '200px' }}>
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
                </article>
              );
            })}
          </section>

          <footer style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <Typography variant="h3">Total:</Typography>
              <Typography variant="h3">
                ${formatPrice(subtotal)}
                <Typography component="span" variant="body2" style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '4px' }}>
                  + tax
                </Typography>
              </Typography>
            </div>

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
          </footer>
        </GlassCard>
      </ContentSection>
    </PageContainer>
  );
};

export default CartCheckout; 