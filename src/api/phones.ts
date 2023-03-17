import { Phone } from 'types/phoneTypes';
import { client } from 'utils/fetch';

export const getAllPhonesByPage = (page = 1, size = 16) =>
  client.get<Phone[]>(`/products?page=${page}&size=${size}`);

export const getAllPhones = () => client.get<Phone[]>(`/products`);
