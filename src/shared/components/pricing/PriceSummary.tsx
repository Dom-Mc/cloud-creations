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
        <span>
          US${formatPrice(subtotal)}
          {hideSubtotalLabel && !showTax && <span style={{ fontWeight: 'normal', fontSize: '0.9em' }}> +tax</span>}
        </span>
      </div>
      
      {showTax && tax !== undefined && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>CA Sales Tax (8.5%):</span>
          <span>US${formatPrice(tax)}</span>
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
          <span>
            US${formatPrice(showTax && tax !== undefined ? subtotal + tax : subtotal)}
            {!showTax && <span style={{ fontWeight: 'normal', fontSize: '0.9em' }}> +tax</span>}
          </span>
        </div>
      )}
    </div>
  );
};

export default PriceSummary; 