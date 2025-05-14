import React from 'react';
import { formatPrice } from '../../../utils/priceCalculations';

interface PriceSummaryProps {
  subtotal: number;
  showTax?: boolean;
  tax?: number;
  hideSubtotalLabel?: boolean;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ 
  subtotal, 
  showTax = false, 
  tax,
  hideSubtotalLabel = false 
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{hideSubtotalLabel ? 'Total:' : 'Subtotal:'}</span>
        <div>
          <span>${formatPrice(subtotal)}</span>
          {hideSubtotalLabel && !showTax && <span style={{ fontWeight: 'normal', fontSize: '0.9em' }}> +tax</span>}
        </div>
      </div>
      
      {showTax && tax !== undefined && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>CA Sales Tax (8.5%):</span>
          <span>${formatPrice(tax)}</span>
        </div>
      )}

      {!hideSubtotalLabel && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontWeight: 'bold',
          borderTop: '1px solid #eee',
          paddingTop: '0.5rem'
        }}>
          <span>Total:</span>
          <div>
            <span>${formatPrice(showTax && tax !== undefined ? subtotal + tax : subtotal)}</span>
            {!showTax && <span style={{ fontWeight: 'normal', fontSize: '0.9em' }}> +tax</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceSummary; 