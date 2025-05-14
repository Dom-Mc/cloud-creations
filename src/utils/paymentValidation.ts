import { PaymentFormData } from '../types/payment';

export interface ValidationErrors {
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
}

export const validateCardNumber = (cardNumber: string): string | undefined => {
  const cleanNumber = cardNumber.replace(/\s/g, '');
  if (!cleanNumber.match(/^\d{16}$/)) {
    return 'Please enter a valid 16-digit card number';
  }
  return undefined;
};

export const validateExpirationDate = (expirationDate: string): string | undefined => {
  if (!expirationDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
    return 'Please enter a valid date (MM/YY)';
  }

  // Check if the expiration date is in the future
  const [month, year] = expirationDate.split('/').map(num => parseInt(num, 10));
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return 'Card has expired';
  }

  return undefined;
};

export const validateCVV = (cvv: string): string | undefined => {
  if (!cvv.match(/^\d{3,4}$/)) {
    return 'Please enter a valid CVV';
  }
  return undefined;
};

export const validatePaymentForm = (formData: PaymentFormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  const cardNumberError = validateCardNumber(formData.cardNumber);
  if (cardNumberError) {
    errors.cardNumber = cardNumberError;
  }

  const expirationError = validateExpirationDate(formData.expirationDate);
  if (expirationError) {
    errors.expirationDate = expirationError;
  }

  const cvvError = validateCVV(formData.cvv);
  if (cvvError) {
    errors.cvv = cvvError;
  }

  return errors;
};

export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  const groups = digits.match(/.{1,4}/g) || [];
  return groups.join(' ').substr(0, 19); // 16 digits + 3 spaces
};

export const formatExpirationDate = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  }
  return digits;
}; 