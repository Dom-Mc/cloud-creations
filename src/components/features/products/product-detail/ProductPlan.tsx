import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, selectCart } from '../../../../store/cartSlice';
import { Product } from '../../../../types/product';
import { BillingPeriod } from '../../../../types/billing';
import { calculateYearlyPrice, formatPrice, getBillingPeriodLabel } from '../../../../utils/priceCalculations';
import Dropdown from '../../../ui/Dropdown';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';

interface ProductPlanProps {
  product: Product;
}

const ProductPlan: React.FC<ProductPlanProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const [licenseQuantity, setLicenseQuantity] = useState(1);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(BillingPeriod.Monthly);
  const [isAdded, setIsAdded] = useState(false);

  const isInCart = cart.some(item => item.productId === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      licenseQuantity,
      billingPeriod
    }));
    setIsAdded(true);
  };

  const price = billingPeriod === BillingPeriod.Yearly
    ? calculateYearlyPrice(product.price, licenseQuantity)
    : product.price * licenseQuantity;

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

  if (isAdded || isInCart) {
    return (
      <section>
        <div>
          <p>✓ {product.name} has been added to your cart!</p>
          <div>
            <Button variant="contained" onClick={() => navigate('/checkout')}>
              Go to Checkout
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <Input
          id="license-quantity"
          label="Number of Licenses"
          type="number"
          min={1}
          value={licenseQuantity.toString()}
          onChange={(value) => setLicenseQuantity(parseInt(value) || 1)}
        />
      </div>

      <div>
        <Dropdown
          id="billing-period"
          label="Billing Period"
          value={billingPeriod}
          onChange={(value) => setBillingPeriod(value as BillingPeriod)}
          options={billingOptions}
        />
      </div>

      <div>
        <p>Total: ${formatPrice(price)}/{billingPeriod}</p>
        <Button 
          variant="contained"
          onClick={handleAddToCart}
          color="primary"
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default ProductPlan; 