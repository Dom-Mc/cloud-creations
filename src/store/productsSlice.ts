import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productsStub } from '../data/products';
import { Product } from '../types/product';
import { RootState } from './store';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: productsStub,
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

// Selectors
export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectProductById = (state: RootState, id: string): Product | undefined => 
  state.products.products.find(product => product.id === id);
export const selectProductsLoading = (state: RootState): boolean => state.products.loading;
export const selectProductsError = (state: RootState): string | null => state.products.error;

export default productsSlice.reducer; 