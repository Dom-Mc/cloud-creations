import { createSlice, PayloadAction, Middleware, AnyAction } from '@reduxjs/toolkit';
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
    addToCart: {
      reducer: (state: CartState, action: PayloadAction<CartItem>) => {
        if (!state.cart.some(item => item.productId === action.payload.productId)) {
          state.cart.push(action.payload);
        }
      },
      prepare: (item: CartItem) => {
        return { payload: item };
      }
    },
    removeFromCart: {
      reducer: (state: CartState, action: PayloadAction<string>) => {
        state.cart = state.cart.filter(item => item.productId !== action.payload);
      },
      prepare: (productId: string) => {
        return { payload: productId };
      }
    },
    checkoutComplete: (state: CartState) => {
      state.cart = [];
      state.total = 0;
    },
    updateCartItemQuantity: {
      reducer: (state: CartState, action: PayloadAction<{ productId: string; quantity: number }>) => {
        const item = state.cart.find(item => item.productId === action.payload.productId);
        if (item) {
          item.licenseQuantity = action.payload.quantity;
        }
      },
      prepare: (payload: { productId: string; quantity: number }) => {
        return { payload };
      }
    },
    updateCartItemBillingPeriod: {
      reducer: (state: CartState, action: PayloadAction<{ productId: string; billingPeriod: BillingPeriod }>) => {
        const item = state.cart.find(item => item.productId === action.payload.productId);
        if (item) {
          item.billingPeriod = action.payload.billingPeriod;
        }
      },
      prepare: (payload: { productId: string; billingPeriod: BillingPeriod }) => {
        return { payload };
      }
    },
    updateTotal: (state: CartState, action: PayloadAction<number>) => {
      state.total = action.payload;
    }
  }
});

export const cartTotalMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  
  if (typeof action === 'object' && action !== null && 'type' in action && typeof action.type === 'string' && action.type.startsWith('cart/') && action.type !== 'cart/updateTotal') {
    const state = store.getState() as RootState;
    const newTotal = calculateCartTotal(state.cart.cart, state);
    store.dispatch(updateTotal(newTotal));
  }
  
  return result;
};

export const {
  addToCart,
  removeFromCart,
  checkoutComplete,
  updateCartItemQuantity,
  updateCartItemBillingPeriod,
  updateTotal
} = cartSlice.actions;

export const selectCart = (state: RootState): CartItem[] => state.cart.cart;
export const selectTotal = (state: RootState): number => state.cart.total;

export default cartSlice.reducer; 