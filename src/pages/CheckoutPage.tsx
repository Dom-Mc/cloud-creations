import React, { useState } from 'react';
import PaymentModal from '../components/PaymentModal';

const CheckoutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Checkout</h1>
      <div>Cart items will go here</div>
      <button onClick={() => setIsModalOpen(true)}>
        Proceed to Payment
      </button>
      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default CheckoutPage; 