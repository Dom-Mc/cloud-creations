import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartItem } from '../types/cart';
import { BillingPeriod } from '../types/billing';
import { ANNUAL_DISCOUNT_PERCENTAGE } from '../constants/pricing';
import { calculateYearlyPrice } from '../utils/priceCalculations';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // state.items.push({ ...action.payload, quantity: 1 });
        state.items.push({ ...action.payload});
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    updateBillingPeriod: (state, action: PayloadAction<{ id: string; billingPeriod: BillingPeriod }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        const oldBillingPeriod = item.billingPeriod;
        item.billingPeriod = action.payload.billingPeriod;
        
        // First convert current price back to monthly if it's yearly
        const monthlyPrice = oldBillingPeriod === 'year' 
          ? item.price / (12 * (1 - ANNUAL_DISCOUNT_PERCENTAGE / 100))
          : item.price;
        
        // Then calculate new price based on new billing period
        item.price = action.payload.billingPeriod === 'year'
          ? calculateYearlyPrice(monthlyPrice, 1)  // Store the full yearly price
          : monthlyPrice;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  updateBillingPeriod,
  clearCart 
} = cartSlice.actions;

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export const selectCartItemCount = (state: RootState): number => 
  state.cart.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
export const selectCartTotal = (state: RootState): number =>
  state.cart.items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);

export default cartSlice.reducer; 