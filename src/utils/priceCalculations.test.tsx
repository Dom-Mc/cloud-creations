import { BillingPeriod } from '../types/billing';
import {
  calculateYearlyPrice,
  formatPrice,
  calculateTax,
  getBillingPeriodLabel
} from './priceCalculations';
import { ANNUAL_DISCOUNT_PERCENTAGE, CA_SALES_TAX_RATE } from '../constants/pricing';

describe('priceCalculations', () => {
  describe('calculateYearlyPrice', () => {
    it('calculates yearly price with annual discount', () => {
      const monthlyPrice = 100;
      const quantity = 1;
      const expectedYearlyPrice = monthlyPrice * quantity * 12 * (1 - ANNUAL_DISCOUNT_PERCENTAGE / 100);
      
      expect(calculateYearlyPrice(monthlyPrice, quantity)).toBe(expectedYearlyPrice);
    });

    it('calculates yearly price for multiple licenses', () => {
      const monthlyPrice = 100;
      const quantity = 3;
      const expectedYearlyPrice = monthlyPrice * quantity * 12 * (1 - ANNUAL_DISCOUNT_PERCENTAGE / 100);
      
      expect(calculateYearlyPrice(monthlyPrice, quantity)).toBe(expectedYearlyPrice);
    });

    it('handles decimal prices correctly', () => {
      const monthlyPrice = 99.99;
      const quantity = 2;
      const expectedYearlyPrice = monthlyPrice * quantity * 12 * (1 - ANNUAL_DISCOUNT_PERCENTAGE / 100);
      
      expect(calculateYearlyPrice(monthlyPrice, quantity)).toBeCloseTo(expectedYearlyPrice, 2);
    });
  });

  describe('formatPrice', () => {
    it('formats integer prices with two decimal places', () => {
      expect(formatPrice(100)).toBe('100.00');
    });

    it('formats decimal prices with two decimal places', () => {
      expect(formatPrice(99.99)).toBe('99.99');
    });

    it('rounds to two decimal places', () => {
      expect(formatPrice(99.999)).toBe('100.00');
      expect(formatPrice(99.994)).toBe('99.99');
    });

    it('handles zero correctly', () => {
      expect(formatPrice(0)).toBe('0.00');
    });
  });

  describe('calculateTax', () => {
    it('calculates correct tax amount', () => {
      const subtotal = 100;
      const expectedTax = subtotal * CA_SALES_TAX_RATE;
      
      expect(calculateTax(subtotal)).toBe(expectedTax);
    });

    it('handles decimal amounts correctly', () => {
      const subtotal = 99.99;
      const expectedTax = subtotal * CA_SALES_TAX_RATE;
      
      expect(calculateTax(subtotal)).toBeCloseTo(expectedTax, 2);
    });

    it('returns zero tax for zero subtotal', () => {
      expect(calculateTax(0)).toBe(0);
    });
  });

  describe('getBillingPeriodLabel', () => {
    it('includes correct price in monthly label', () => {
      const price = 100;
      const label = getBillingPeriodLabel(price, BillingPeriod.Monthly);
      
      expect(label).toContain('$100.00');
      expect(label).toContain('/month');
      expect(label).toContain('per license');
    });

    it('includes correct price and discount in yearly label', () => {
      const price = 100;
      const yearlyPrice = calculateYearlyPrice(price, 1);
      const label = getBillingPeriodLabel(price, BillingPeriod.Yearly);
      
      expect(label).toContain(`$${yearlyPrice.toFixed(2)}`);
      expect(label).toContain('/yr');
      expect(label).toContain(`${ANNUAL_DISCOUNT_PERCENTAGE}%`);
      expect(label).toContain('per license');
    });

    it('includes correct decimal price in label', () => {
      const price = 99.99;
      const label = getBillingPeriodLabel(price, BillingPeriod.Monthly);
      
      expect(label).toContain('$99.99');
      expect(label).toContain('/month');
      expect(label).toContain('per license');
    });
  });
}); 