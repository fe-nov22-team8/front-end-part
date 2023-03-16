import { client } from '../utils/fetch';
import { Phone } from '../types/phoneTypes';

export function fetchPhones() {
  return client.get<Phone[]>(`/products`);
}
