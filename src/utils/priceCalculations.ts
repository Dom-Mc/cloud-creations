import { BillingPeriod } from '../types/billing';
import { ANNUAL_DISCOUNT_PERCENTAGE, CA_SALES_TAX_RATE } from '../constants/pricing';

const ANNUAL_DISCOUNT_RATE = ANNUAL_DISCOUNT_PERCENTAGE / 100;

export const calculateYearlyPrice = (monthlyPrice: number, quantity: number): number => {
  const yearlyPrice = monthlyPrice * quantity * 12;
  return yearlyPrice * (1 - ANNUAL_DISCOUNT_RATE);
};

export const formatPrice = (price: number): string => {
  return price.toFixed(2);
};

export const calculateTax = (subtotal: number): number => {
  return subtotal * CA_SALES_TAX_RATE;
};

export const getBillingPeriodLabel = (price: number, billingPeriod: BillingPeriod): string => {
  if (billingPeriod === BillingPeriod.Yearly) {
    const yearlyPrice = calculateYearlyPrice(price, 1);
    return `Per ${billingPeriod} ($${formatPrice(yearlyPrice)}/yr per license) - Save ${ANNUAL_DISCOUNT_PERCENTAGE}%`;
  }
  return `Per ${billingPeriod} ($${formatPrice(price)}/month per license)`;
}; 