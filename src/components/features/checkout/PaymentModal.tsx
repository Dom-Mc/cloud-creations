import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutComplete, selectCart, selectTotal, CartItem } from '../../../store/cartSlice';
import { formatPrice, calculateYearlyPrice, getBillingPeriodLabel, calculateTax } from '../../../utils/priceCalculations';
import { ANNUAL_DISCOUNT_PERCENTAGE } from '../../../constants/pricing';
import { BillingPeriod } from '../../../types/billing';
import { generateReceiptDetails } from '../../../utils/receiptUtils';
import PaymentSuccess from './PaymentSuccess';
import PriceSummary from '../../shared/pricing/PriceSummary';
import { Product } from '../../../types/product';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import Typography from '../../ui/Typography';

interface PaymentModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<{ 
    id: string; 
    timestamp: string;
    subtotal: number;
    tax: number;
    total: number;
  } | null>(null);

  const tax = calculateTax(total);
  const finalTotal = total + tax;

  const handlePayment = () => {
    const { id, timestamp } = generateReceiptDetails();
    
    dispatch(checkoutComplete());
    setReceiptDetails({ 
      id,
      timestamp,
      subtotal: total,
      tax,
      total: finalTotal
    });
    setIsSuccess(true);
  };

  const content = isSuccess && receiptDetails ? (
    <PaymentSuccess
      receiptId={receiptDetails.id}
      timestamp={receiptDetails.timestamp}
      subtotal={receiptDetails.subtotal}
      tax={receiptDetails.tax}
      total={receiptDetails.total}
    />
  ) : (
    <>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <section aria-label="Cart items">
            {cart.map((item: CartItem) => {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;

              const price = item.billingPeriod === BillingPeriod.Yearly
                ? calculateYearlyPrice(product.price, item.licenseQuantity)
                : product.price * item.licenseQuantity;

              return (
                <article key={product.id} style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
                      <p style={{ margin: '0 0 0.5rem 0' }}>Licenses: {item.licenseQuantity}</p>
                      <p style={{ margin: '0 0 0.5rem 0' }}>{getBillingPeriodLabel(product.price, item.billingPeriod)}</p>
                      {item.billingPeriod === BillingPeriod.Yearly && (
                        <p aria-label="Yearly discount" style={{ margin: '0', color: '#4CAF50' }}>
                          Includes {ANNUAL_DISCOUNT_PERCENTAGE}% yearly discount
                        </p>
                      )}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: '0', fontWeight: 'bold' }}>
                        ${formatPrice(price)}
                      </p>
                      <p style={{ margin: '0', fontSize: '0.9em', color: '#666' }}>
                        per {item.billingPeriod.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <footer style={{ marginTop: '1rem' }}>
            <PriceSummary subtotal={total} showTax tax={tax} />
          </footer>
        </>
      )}
    </>
  );

  const actions = !isSuccess && cart.length > 0 ? (
    <>
      <Button onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={handlePayment} variant="contained" color="primary">
        Complete Payment
      </Button>
    </>
  ) : undefined;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={isSuccess ? "Payment Successful" : "Complete Payment"}
      actions={actions}
    >
      {content}
    </Modal>
  );
};

export default PaymentModal; 