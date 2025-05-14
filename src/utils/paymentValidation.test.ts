import {
  validateCardNumber,
  validateExpirationDate,
  validateCVV,
  validatePaymentForm,
  formatCardNumber,
  formatExpirationDate
} from './paymentValidation';

describe('validateCardNumber', () => {
  it('accepts valid card numbers', () => {
    expect(validateCardNumber('4111111111111111')).toBeUndefined();
    expect(validateCardNumber('4111 1111 1111 1111')).toBeUndefined();
  });

  it('rejects invalid card numbers', () => {
    expect(validateCardNumber('411111111111')).toBe('Please enter a valid 16-digit card number');
    expect(validateCardNumber('abcd efgh ijkl mnop')).toBe('Please enter a valid 16-digit card number');
    expect(validateCardNumber('')).toBe('Please enter a valid 16-digit card number');
  });
});

describe('validateExpirationDate', () => {
  it('accepts valid future dates', () => {
    // Mock current date to 2024-03
    const mockDate = new Date('2024-03-15');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(validateExpirationDate('12/24')).toBeUndefined();
    expect(validateExpirationDate('03/25')).toBeUndefined();

    jest.useRealTimers();
  });

  it('rejects invalid date formats', () => {
    expect(validateExpirationDate('13/24')).toBe('Please enter a valid date (MM/YY)');
    expect(validateExpirationDate('00/24')).toBe('Please enter a valid date (MM/YY)');
    expect(validateExpirationDate('1224')).toBe('Please enter a valid date (MM/YY)');
    expect(validateExpirationDate('')).toBe('Please enter a valid date (MM/YY)');
  });

  it('rejects expired dates', () => {
    // Mock current date to 2024-03
    const mockDate = new Date('2024-03-15');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    expect(validateExpirationDate('02/24')).toBe('Card has expired');
    expect(validateExpirationDate('03/23')).toBe('Card has expired');

    jest.useRealTimers();
  });
});

describe('validateCVV', () => {
  it('accepts valid CVV numbers', () => {
    expect(validateCVV('123')).toBeUndefined();
    expect(validateCVV('1234')).toBeUndefined();
  });

  it('rejects invalid CVV numbers', () => {
    expect(validateCVV('12')).toBe('Please enter a valid CVV');
    expect(validateCVV('12345')).toBe('Please enter a valid CVV');
    expect(validateCVV('abc')).toBe('Please enter a valid CVV');
    expect(validateCVV('')).toBe('Please enter a valid CVV');
  });
});

describe('validatePaymentForm', () => {
  const validForm = {
    cardNumber: '4111111111111111',
    expirationDate: '12/24',
    cvv: '123'
  };

  it('returns no errors for valid form data', () => {
    // Mock current date to 2024-03
    const mockDate = new Date('2024-03-15');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const errors = validatePaymentForm(validForm);
    expect(Object.keys(errors)).toHaveLength(0);

    jest.useRealTimers();
  });

  it('returns all errors for invalid form data', () => {
    const invalidForm = {
      cardNumber: '411',
      expirationDate: '13/24',
      cvv: '12'
    };

    const errors = validatePaymentForm(invalidForm);
    expect(errors.cardNumber).toBeDefined();
    expect(errors.expirationDate).toBeDefined();
    expect(errors.cvv).toBeDefined();
  });
});

describe('formatCardNumber', () => {
  it('formats card number with spaces', () => {
    expect(formatCardNumber('4111111111111111')).toBe('4111 1111 1111 1111');
    expect(formatCardNumber('411111')).toBe('4111 11');
  });

  it('removes non-digit characters', () => {
    expect(formatCardNumber('4111-1111-1111-1111')).toBe('4111 1111 1111 1111');
    expect(formatCardNumber('4111.1111.1111.1111')).toBe('4111 1111 1111 1111');
  });
});

describe('formatExpirationDate', () => {
  it('formats expiration date with slash when length is sufficient', () => {
    expect(formatExpirationDate('1224')).toBe('12/24');
    expect(formatExpirationDate('0125')).toBe('01/25');
  });

  it('keeps original input when length is insufficient', () => {
    expect(formatExpirationDate('1')).toBe('1');
    expect(formatExpirationDate('12')).toBe('12');
  });

  it('removes non-digit characters before formatting', () => {
    expect(formatExpirationDate('12/24')).toBe('12/24');
    expect(formatExpirationDate('01-25')).toBe('01/25');
    expect(formatExpirationDate('01a25')).toBe('01/25');
  });

  it('handles empty input', () => {
    expect(formatExpirationDate('')).toBe('');
  });
}); 