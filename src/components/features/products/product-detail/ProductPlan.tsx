import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, selectCartItems } from '../../../../store/cartSlice';
import { Product } from '../../../../types/product';
import { BillingPeriod } from '../../../../types/billing';
import { formatPrice, calculateYearlyPrice } from '../../../../utils/priceCalculations';
import { ANNUAL_DISCOUNT_PERCENTAGE } from '../../../../constants/pricing';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import Typography from '../../../ui/Typography';
import {
  PlanContainer,
  PlanOptions,
  PlanCard,
  QuantitySection,
  TotalSection,
  ActionSection
} from './ProductPlan.styles';

const ProductPlan: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState(1);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(BillingPeriod.Month);
  const [isAdded, setIsAdded] = useState(false);

  const isInCart = cartItems.some(item => item.id === product.id);
  const yearlyPrice = calculateYearlyPrice(product.price, 1);
  const monthlyEquivalent = yearlyPrice / 12;
  const currentPrice = billingPeriod === BillingPeriod.Year ? yearlyPrice : product.price;
  const total = currentPrice * quantity;

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: currentPrice,
      quantity,
      billingPeriod
    }));
    setIsAdded(true);
  };

  if (isAdded || isInCart) {
    return (
      <PlanContainer style={{ textAlign: 'center' }}>
        <Typography variant="h3" color="success" style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
          <ShoppingCartIcon /> {product.name} has been added to your cart!
        </Typography>
        <ActionSection style={{ justifyContent: 'center' }}>
          <Button 
            variant="contained"
            onClick={() => navigate('/checkout')}
          >
            Go to Checkout
          </Button>
          <Button 
            variant="outlined"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
        </ActionSection>
      </PlanContainer>
    );
  }

  return (
    <PlanContainer>
      <Typography variant="h3" component="div" gutterBottom>Select Your Plan</Typography>
      <PlanOptions>
        <PlanCard 
          type="button"
          $isSelected={billingPeriod === BillingPeriod.Month}
          onClick={() => setBillingPeriod(BillingPeriod.Month)}
        >
          <div className="period">Monthly</div>
          <div className="price">${formatPrice(product.price)}/mo</div>
        </PlanCard>

        <PlanCard 
          type="button"
          $isSelected={billingPeriod === BillingPeriod.Year}
          onClick={() => setBillingPeriod(BillingPeriod.Year)}
        >
          <div className="period">Yearly</div>
          <div className="price">${formatPrice(yearlyPrice)}/yr</div>
          <div className="save">Save {ANNUAL_DISCOUNT_PERCENTAGE}%</div>
        </PlanCard>
      </PlanOptions>

      <QuantitySection>
        <Input
          id="quantity"
          label="Quantity"
          type="number"
          min={1}
          value={quantity.toString()}
          onChange={(value) => setQuantity(parseInt(value) || 1)}
          fullWidth
        />
      </QuantitySection>

      <TotalSection>
        <Typography variant="h3">
          Total: ${formatPrice(total)}/{billingPeriod}
        </Typography>
        <ActionSection>
          <Button 
            variant="contained"
            onClick={handleAddToCart}
            color="primary"
            size="large"
          >
            Add to Cart
          </Button>
          <Button 
            variant="outlined"
            onClick={() => navigate('/products')}
          >
            Back to Products
          </Button>
        </ActionSection>
      </TotalSection>
    </PlanContainer>
  );
};

export default ProductPlan; 