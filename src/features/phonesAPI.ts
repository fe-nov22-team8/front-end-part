import { client } from '../utils/fetch';
import { Product } from '../types/productType';

export function fetchPhones() {
  return client.get<Product[]>(`/products`);
}
