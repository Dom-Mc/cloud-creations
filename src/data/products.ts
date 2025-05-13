export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Basic",
    price: 9.99,
    description: "For individuals"
  },
  {
    id: "2",
    name: "Pro",
    price: 19.99,
    description: "For professionals"
  },
  {
    id: "3",
    name: "Enterprise",
    price: 49.99,
    description: "For teams"
  },
  {
    id: "4",
    name: "Cloud Analytics Add-on",
    price: 15.99,
    description: "Advanced analytics and reporting for your cloud designs"
  },
  {
    id: "5",
    name: "Cloud Security Suite",
    price: 29.99,
    description: "Enhanced security and compliance tools for your cloud projects"
  }
]; 