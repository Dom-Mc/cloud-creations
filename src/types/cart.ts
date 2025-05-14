import { BillingPeriod } from './billing';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  billingPeriod: BillingPeriod;
}

export default CartItem; 