import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { cartTotalMiddleware } from './cartSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartTotalMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store }; 