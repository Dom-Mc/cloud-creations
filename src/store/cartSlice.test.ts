import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  selectCartItems,
  selectCartItemCount,
  selectCartTotal
} from './cartSlice';
import productsReducer from './productsSlice';
import { CartItem } from '../types/cart';
import { BillingPeriod } from '../types/billing';

describe('cart reducer', () => {
  const initialState = { items: [] };
  const sampleItem: CartItem = {
    id: '1',
    name: 'Cloud Storage',
    price: 9.99,
    quantity: 1,
    billingPeriod: BillingPeriod.Month
  };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addToCart with new item', () => {
    const actual = cartReducer(initialState, addToCart(sampleItem));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0]).toEqual(sampleItem);
  });

  it('should handle addToCart with existing item', () => {
    const stateWithItem = cartReducer(initialState, addToCart(sampleItem));
    const actual = cartReducer(stateWithItem, addToCart(sampleItem));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0].quantity).toBe(2);
  });

  it('should handle removeFromCart', () => {
    const stateWithItem = cartReducer(initialState, addToCart(sampleItem));
    const actual = cartReducer(stateWithItem, removeFromCart(sampleItem.id));
    expect(actual.items).toHaveLength(0);
  });

  it('should handle updateQuantity', () => {
    const stateWithItem = cartReducer(initialState, addToCart(sampleItem));
    const actual = cartReducer(stateWithItem, updateQuantity({ id: sampleItem.id, quantity: 5 }));
    expect(actual.items[0].quantity).toBe(5);
  });

  it('should handle clearCart', () => {
    const stateWithItem = cartReducer(initialState, addToCart(sampleItem));
    const actual = cartReducer(stateWithItem, clearCart());
    expect(actual.items).toHaveLength(0);
  });
});

describe('cart selectors', () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer
    }
  });

  const sampleItems: CartItem[] = [
    {
      id: '1',
      name: 'Cloud Storage',
      price: 9.99,
      quantity: 2,
      billingPeriod: BillingPeriod.Month
    },
    {
      id: '2',
      name: 'Cloud Compute',
      price: 19.99,
      quantity: 1,
      billingPeriod: BillingPeriod.Month
    }
  ];

  beforeEach(() => {
    store.dispatch(clearCart());
    // Add items with their initial quantities
    sampleItems.forEach(item => {
      store.dispatch(addToCart({ ...item, quantity: 1 })); // First add with quantity 1
      if (item.quantity > 1) {
        // Then update to desired quantity if more than 1
        store.dispatch(updateQuantity({ id: item.id, quantity: item.quantity }));
      }
    });
  });

  it('should select cart items', () => {
    const state = store.getState();
    const items = selectCartItems(state);
    expect(items).toHaveLength(2);
    expect(items[0].name).toBe('Cloud Storage');
    expect(items[0].quantity).toBe(2);
    expect(items[1].name).toBe('Cloud Compute');
    expect(items[1].quantity).toBe(1);
  });

  it('should select cart item count', () => {
    const state = store.getState();
    const count = selectCartItemCount(state);
    expect(count).toBe(3); // 2 from Cloud Storage + 1 from Cloud Compute
  });

  it('should select cart total', () => {
    const state = store.getState();
    const total = selectCartTotal(state);
    const expectedTotal = (9.99 * 2) + (19.99 * 1);
    expect(total).toBeCloseTo(expectedTotal, 2); // Using toBeCloseTo for floating point comparison
  });
}); 