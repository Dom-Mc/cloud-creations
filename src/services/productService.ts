import { Product } from '../types/product';
import { productsStub } from '../data/products';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  // Simulate network delay
  await delay(500);
  
  return productsStub;
};

export const getProduct = async (id: string): Promise<Product | null> => {
  // Simulate network delay
  await delay(500);
  
  const product = productsStub.find(p => p.id === id);
  return product || null;
}; 