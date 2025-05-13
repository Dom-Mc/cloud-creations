import React from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <h2>Payment Details</h2>
        <form>
          <div>Payment form will go here</div>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PaymentModal; 