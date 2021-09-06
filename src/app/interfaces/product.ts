export interface Product {
  id: number;
  description: string;
  price: number;
}

export interface ProductOnBasket extends Product {
  count: number
}