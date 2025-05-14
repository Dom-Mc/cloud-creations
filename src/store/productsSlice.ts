import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from '../types/product';
import { productsStub } from '../data/products';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: productsStub
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export const selectProducts = (state: RootState): Product[] => state.products.products;
export const selectProductBySlug = (slug: string) => (state: RootState): Product | undefined => 
  state.products.products.find((p: Product) => p.slug === slug);

export default productsSlice.reducer;