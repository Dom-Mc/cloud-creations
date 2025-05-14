import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { selectProducts, selectProductBySlug } from './productsSlice';
import cartReducer from './cartSlice';
import { productsStub } from '../data/products';

describe('products reducer', () => {
  it('should handle initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toMatchObject({
      products: expect.arrayContaining([
        expect.objectContaining({
          id: '1',
          name: 'CloudShop Pro',
          slug: 'cloudshop-pro'
        })
      ])
    });
  });
});

describe('products selectors', () => {
  const store = configureStore({
    reducer: {
      products: productsReducer,
      cart: cartReducer
    }
  });

  it('should select all products', () => {
    const state = store.getState();
    const products = selectProducts(state);
    expect(products).toEqual(productsStub);
    expect(products[0].name).toBe('CloudShop Pro');
    expect(products[1].name).toBe('CloudDraw Vector');
    expect(products[2].name).toBe('CloudCut Pro');
  });

  it('should select product by slug', () => {
    const state = store.getState();
    const product = selectProductBySlug('cloudshop-pro')(state);
    expect(product).toBeDefined();
    expect(product?.name).toBe('CloudShop Pro');
    expect(product?.price).toBe(20.99);
  });

  it('should return undefined for non-existent product slug', () => {
    const state = store.getState();
    const product = selectProductBySlug('non-existent')(state);
    expect(product).toBeUndefined();
  });
}); 