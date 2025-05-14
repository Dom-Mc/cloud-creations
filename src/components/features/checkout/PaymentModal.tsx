import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal, clearCart } from '../../../store/cartSlice';
import { formatPrice, calculateTax } from '../../../utils/priceCalculations';
import { Product } from '../../../types/product';
import { PaymentFormData } from '../../../types/payment';
import {
  validatePaymentForm,
  formatCardNumber,
  formatExpirationDate,
  ValidationErrors
} from '../../../utils/paymentValidation';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Typography from '../../ui/Typography';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface PaymentModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ products, isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal) as number;
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<{ 
    id: string; 
    timestamp: string;
    subtotal: number;
    tax: number;
    total: number;
  } | null>(null);

  // Redirect to home if cart is empty and not in success state
  useEffect(() => {
    if (cart.length === 0 && !isSuccess && isOpen) {
      navigate('/');
      onClose();
    }
  }, [cart.length, isSuccess, navigate, onClose, isOpen]);

  const tax = calculateTax(total);
  const finalTotal = total + tax;

  const handleInputChange = (field: keyof PaymentFormData, value: string) => {
    let formattedValue = value;
    
    if (field === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expirationDate') {
      formattedValue = formatExpirationDate(value);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substr(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handlePayment = async () => {
    const validationErrors = validatePaymentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const receiptId = Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().toISOString();
    
    dispatch(clearCart());
    setReceiptDetails({ 
      id: receiptId,
      timestamp,
      subtotal: total,
      tax,
      total: finalTotal
    });
    setIsSuccess(true);
    setIsProcessing(false);
  };

  const handleClose = () => {
    if (isSuccess) {
      navigate('/');
    }
    onClose();
  };

  const isFormComplete = (): boolean => {
    return (
      formData.cardNumber.replace(/\s/g, '').length === 16 &&
      formData.expirationDate.length === 5 &&
      formData.cvv.length >= 3
    );
  };

  // Don't render anything if cart is empty and not in success state
  if (cart.length === 0 && !isSuccess) {
    return null;
  }

  let modalContent;
  if (isSuccess && receiptDetails) {
    modalContent = (
      <div style={{ textAlign: 'center', padding: '8px 0 24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Typography 
            variant="h3" 
            style={{ 
              color: '#4CAF50',
              marginBottom: '8px'
            }}
          >
            Payment Successful!
          </Typography>
          <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
            Thank you for your purchase
          </Typography>
        </div>

        <div style={{ 
          background: 'rgba(0, 0, 0, 0.03)', 
          padding: '24px', 
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <Typography variant="body1" style={{ marginBottom: '8px' }}>
            Receipt ID: <span style={{ fontFamily: 'monospace' }}>{receiptDetails.id}</span>
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '24px' }}>
            Date: {new Date(receiptDetails.timestamp).toLocaleString()}
          </Typography>

          <div style={{ 
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            paddingTop: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography variant="body1">Subtotal:</Typography>
              <Typography variant="body1">${formatPrice(receiptDetails.subtotal)}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <Typography variant="body1">Tax:</Typography>
              <Typography variant="body1">${formatPrice(receiptDetails.tax)}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h3">Total:</Typography>
              <Typography variant="h3">${formatPrice(receiptDetails.total)}</Typography>
            </div>
          </div>
        </div>

        <Button 
          variant="contained" 
          onClick={handleClose}
          style={{ minWidth: '200px' }}
        >
          Return to Home
        </Button>
      </div>
    );
  } else if (cart.length > 0) {
    modalContent = (
      <>
        <section style={{ marginBottom: '32px' }}>
          {cart.map((item: CartItem) => (
            <article key={item.id} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Typography variant="h3">{item.name}</Typography>
                  <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.6)', display: 'inline' }}>
                    Quantity: {item.quantity}
                  </Typography>
                </div>
                <Typography variant="h3">
                  ${formatPrice(item.price * item.quantity)}
                </Typography>
              </div>
            </article>
          ))}
        </section>

        <section style={{ marginBottom: '32px' }}>
          <Typography variant="h3" style={{ marginBottom: '16px' }}>Payment Details</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
              id="card-number"
              label="Card Number"
              value={formData.cardNumber}
              onChange={(value) => handleInputChange('cardNumber', value)}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              placeholder="1234 5678 9012 3456"
              fullWidth
            />
            <div style={{ display: 'flex', gap: '16px' }}>
              <Input
                id="expiration-date"
                label="Expiration Date"
                value={formData.expirationDate}
                onChange={(value) => handleInputChange('expirationDate', value)}
                error={!!errors.expirationDate}
                helperText={errors.expirationDate}
                placeholder="MM/YY"
                style={{ width: '120px' }}
              />
              <Input
                id="cvv"
                label="CVV"
                value={formData.cvv}
                onChange={(value) => handleInputChange('cvv', value)}
                error={!!errors.cvv}
                helperText={errors.cvv}
                type="password"
                placeholder="123"
                style={{ width: '100px' }}
              />
            </div>
          </div>
        </section>

        <footer>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Typography variant="body1">Subtotal:</Typography>
            <Typography variant="body1" style={{ textAlign: 'right' }}>${formatPrice(total)}</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Typography variant="body1">Tax:</Typography>
            <Typography variant="body1" style={{ textAlign: 'right' }}>${formatPrice(tax)}</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <Typography variant="h3">Total:</Typography>
            <Typography variant="h3" style={{ textAlign: 'right' }}>${formatPrice(finalTotal)}</Typography>
          </div>
        </footer>
      </>
    );
  } else {
    modalContent = null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSuccess ? "Order Confirmation" : "Complete Payment"}
      actions={!isSuccess && cart.length > 0 ? (
        <>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button 
            onClick={handlePayment} 
            variant="contained" 
            color="primary"
            disabled={isProcessing || !isFormComplete()}
          >
            {isProcessing ? 'Processing...' : 'Complete Payment'}
          </Button>
        </>
      ) : undefined}
    >
      {modalContent}
    </Modal>
  );
};

export default PaymentModal; 