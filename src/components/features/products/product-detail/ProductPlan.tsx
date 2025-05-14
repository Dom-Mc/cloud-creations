import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, selectCart } from '../../../../store/cartSlice';
import { Product } from '../../../../types/product';
import { BillingPeriod } from '../../../../types/billing';
import { calculateYearlyPrice, formatPrice, getBillingPeriodLabel } from '../../../../utils/priceCalculations';

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

  if (isAdded || isInCart) {
    return (
      <section>
        <div>
          <p>✓ {product.name} has been added to your cart!</p>
          <div>
            <button onClick={() => navigate('/checkout')}>
              Go to Checkout
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <label htmlFor="license-quantity">Number of Licenses:</label>
        <input
          id="license-quantity"
          type="number"
          min="1"
          value={licenseQuantity}
          onChange={(e) => setLicenseQuantity(parseInt(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="billing-period">Billing Period:</label>
        <select
          id="billing-period"
          value={billingPeriod}
          onChange={(e) => setBillingPeriod(e.target.value as BillingPeriod)}
        >
          <option value={BillingPeriod.Monthly}>
            {getBillingPeriodLabel(product.price, BillingPeriod.Monthly)}
          </option>
          <option value={BillingPeriod.Yearly}>
            {getBillingPeriodLabel(product.price, BillingPeriod.Yearly)}
          </option>
        </select>
      </div>

      <div>
        <p>Total: ${formatPrice(price)}/{billingPeriod}</p>
        <button 
          onClick={handleAddToCart}
          className="primary"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductPlan; 