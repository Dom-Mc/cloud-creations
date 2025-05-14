import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeFromCart, 
  updateCartItemQuantity, 
  updateCartItemBillingPeriod,
  selectCart,
  selectTotal,
  CartItem
} from '../../../store/cartSlice';
import { getBillingPeriodLabel, formatPrice, calculateYearlyPrice } from '../../../utils/priceCalculations';
import { BillingPeriod } from '../../../types/billing';
import { Product } from '../../../types/product';
import PriceSummary from '../../shared/pricing/PriceSummary';
import Dropdown from '../../ui/Dropdown';
import Input from '../../ui/Input';
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

const CartCheckout: React.FC<CartCheckoutProps> = ({ products, onOpenPaymentModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateCartItemQuantity({ productId, quantity }));
  };

  const handleBillingPeriodChange = (productId: string, billingPeriod: BillingPeriod) => {
    dispatch(updateCartItemBillingPeriod({ productId, billingPeriod }));
  };

  if (cart.length === 0) {
    return (
      <PageContainer>
        <ContentSection>
          <Typography variant="h2" gutterBottom>Your Cart is Empty</Typography>
          <Button variant="contained" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>Review Your Cart</Typography>

      <ContentSection>
        {cart.map((item: CartItem) => {
          const product = products.find(p => p.id === item.productId);
          if (!product) return null;

          const itemSubtotal = item.billingPeriod === BillingPeriod.Yearly
            ? calculateYearlyPrice(product.price, item.licenseQuantity)
            : product.price * item.licenseQuantity;

          const billingOptions = [
            {
              value: BillingPeriod.Monthly,
              label: getBillingPeriodLabel(product.price, BillingPeriod.Monthly)
            },
            {
              value: BillingPeriod.Yearly,
              label: getBillingPeriodLabel(product.price, BillingPeriod.Yearly)
            }
          ];

          return (
            <GlassCard key={product.id}>
              <Link 
                to={`/products/${product.slug}`}
                style={{ 
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <Typography variant="h3" gutterBottom>
                  {product.name}
                </Typography>
              </Link>
              
              <FormGroup>
                <FlexBox gap={3} align="center">
                  <InputWrapper style={{ width: '150px' }}>
                    <Input
                      id={`quantity-${product.id}`}
                      label="Licenses"
                      type="number"
                      min={1}
                      value={item.licenseQuantity.toString()}
                      onChange={(value) => handleQuantityChange(product.id, parseInt(value) || 1)}
                      fullWidth
                    />
                  </InputWrapper>

                  <InputWrapper style={{ flex: 1 }}>
                    <Dropdown
                      id={`billing-${product.id}`}
                      label="Billing"
                      value={item.billingPeriod}
                      onChange={(value) => handleBillingPeriodChange(product.id, value as BillingPeriod)}
                      options={billingOptions}
                    />
                  </InputWrapper>
                </FlexBox>
              </FormGroup>

              <FlexBox justify="space-between" align="center">
                <div>
                  <Typography component="span">Subtotal: </Typography>
                  <Typography component="span" style={{ fontWeight: 'bold' }}>
                    ${formatPrice(itemSubtotal)}
                  </Typography>
                  <Typography 
                    component="span" 
                    color="text.secondary"
                  >
                    {' '}per {item.billingPeriod.toLowerCase()}
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  onClick={() => handleRemove(product.id)}
                  color="primary"
                >
                  Remove
                </Button>
              </FlexBox>
            </GlassCard>
          );
        })}
      </ContentSection>

      <ContentSection>
        <PriceSummary subtotal={total} hideSubtotalLabel />
        <FlexBox justify="flex-end" gap={2} style={{ marginTop: 24 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
          <Button
            variant="contained"
            onClick={onOpenPaymentModal}
          >
            Proceed to Payment
          </Button>
        </FlexBox>
      </ContentSection>
    </PageContainer>
  );
};

export default CartCheckout; 