import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../store/productsSlice';
import CartCheckout from '../components/features/checkout/CartCheckout';
import PaymentModal from '../components/features/checkout/PaymentModal';

const CheckoutPage: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const products = useSelector(selectProducts);

  return (
    <main>
      <CartCheckout 
        products={products}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)} 
      />
      <PaymentModal
        products={products}
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </main>
  );
};

export default CheckoutPage; 