import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../utils/priceCalculations';
import Button from '../../ui/Button';

interface PaymentSuccessProps {
  receiptId: string;
  timestamp: string;
  subtotal: number;
  tax: number;
  total: number;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ 
  receiptId, 
  timestamp,
  subtotal,
  tax,
  total
}) => {
  const navigate = useNavigate();

  return (
    <section aria-label="Payment successful">
      <header>
        <h2>Payment Successful!</h2>
      </header>

      <div>
        <p>Your payment has been processed successfully.</p>
        
        <div>
          <p>Receipt ID: {receiptId}</p>
          <p>Transaction Time: {timestamp}</p>
          
          <div>
            <div>
              <span>Subtotal:</span>
              <span>${formatPrice(subtotal)}</span>
            </div>
            <div>
              <span>CA Sales Tax (8.5%):</span>
              <span>${formatPrice(tax)}</span>
            </div>
            <div>
              <span>Total:</span>
              <span>${formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div>
          <Button
            variant="contained"
            onClick={() => navigate('/products')}
            color="primary"
          >
            Continue Shopping
          </Button>
        </div>
      </footer>
    </section>
  );
};

export default PaymentSuccess; 