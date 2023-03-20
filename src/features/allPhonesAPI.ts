import { client } from '../utils/fetch';
import { Product } from '../types/productType';

export function fetchPhonesPage(page: number, onPage: number) {
  return client.get<Product[]>(`/products?page=${page}&onPage=${onPage}`);
}
