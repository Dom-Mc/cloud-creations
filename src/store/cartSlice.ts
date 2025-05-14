import { createSlice, PayloadAction, Middleware, AnyAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { BillingPeriod } from '../types/billing';
import { calculateYearlyPrice } from '../utils/priceCalculations';
import { Product } from '../types/product';

export interface CartItem {
  productId: string;
  licenseQuantity: number;
  billingPeriod: BillingPeriod;
}

interface CartState {
  cart: CartItem[];
  total: number;
}

const initialState: CartState = {
  cart: [],
  total: 0
};

const calculateCartTotal = (cart: CartItem[], state: RootState): number => {
  return cart.reduce((total, item) => {
    const product = state.products.products.find((p: Product) => p.id === item.productId);
    if (!product) return total;

    const monthlyPrice = product.price * item.licenseQuantity;
    
    if (item.billingPeriod === BillingPeriod.Yearly) {
      return total + calculateYearlyPrice(product.price, item.licenseQuantity);
    }
    
    return total + monthlyPrice;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      if (!state.cart.some(item => item.productId === action.payload.productId)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.productId !== action.payload);
    },
    checkoutComplete: (state: CartState) => {
      state.cart = [];
      state.total = 0;
    },
    updateCartItemQuantity: (state: CartState, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.cart.find(item => item.productId === action.payload.productId);
      if (item) {
        item.licenseQuantity = action.payload.quantity;
      }
    },
    updateCartItemBillingPeriod: (state: CartState, action: PayloadAction<{ productId: string; billingPeriod: BillingPeriod }>) => {
      const item = state.cart.find(item => item.productId === action.payload.productId);
      if (item) {
        item.billingPeriod = action.payload.billingPeriod;
      }
    },
    updateTotal: (state: CartState, action: PayloadAction<number>) => {
      state.total = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  checkoutComplete,
  updateCartItemQuantity,
  updateCartItemBillingPeriod,
  updateTotal
} = cartSlice.actions;

const TOTAL_RECALCULATION_ACTIONS = [
  cartSlice.actions.addToCart.type,
  cartSlice.actions.removeFromCart.type,
  cartSlice.actions.updateCartItemQuantity.type,
  cartSlice.actions.updateCartItemBillingPeriod.type
] as const;

type CartActionType = typeof TOTAL_RECALCULATION_ACTIONS[number];

export const cartTotalMiddleware: Middleware = (store) => (next) => (action: unknown) => {
  const result = next(action);
  
  const cartAction = action as AnyAction;
  if (TOTAL_RECALCULATION_ACTIONS.includes(cartAction.type as CartActionType)) {
    const state = store.getState() as RootState;
    const newTotal = calculateCartTotal(state.cart.cart, state);
    store.dispatch(updateTotal(newTotal));
  }
  
  return result;
};

export const selectCart = (state: RootState): CartItem[] => state.cart.cart;
export const selectTotal = (state: RootState): number => state.cart.total;

export const selectCartItemsMap = createSelector(
  selectCart,
  (cart) => cart.reduce((acc, item) => {
    acc[item.productId] = item;
    return acc;
  }, {} as Record<string, CartItem>)
);

export const selectCartItemCount = createSelector(
  selectCart,
  (cart) => cart.length
);

export default cartSlice.reducer; 