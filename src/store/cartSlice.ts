import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartItem } from '../types/cart';
import { BillingPeriod } from '../types/billing';

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
        state.items.push({ ...action.payload, quantity: 1 });
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
        item.billingPeriod = action.payload.billingPeriod;
        // Update price based on billing period
        const basePrice = item.price / (item.billingPeriod === 'year' ? 10 : 1);
        item.price = action.payload.billingPeriod === 'year' ? basePrice * 10 : basePrice;
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