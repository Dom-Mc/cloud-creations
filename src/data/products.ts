import { Product } from '../types/product';

export const productsStub: Product[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Essential features for small teams',
    price: 10,
    features: ['Up to 5 users', '10GB storage', 'Basic support']
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    description: 'Advanced features for growing teams',
    price: 20,
    features: ['Up to 20 users', '50GB storage', 'Priority support', 'Advanced analytics']
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    description: 'Full feature set for large organizations',
    price: 50,
    features: ['Unlimited users', 'Unlimited storage', '24/7 support', 'Custom integrations', 'Dedicated account manager']
  }
]; 