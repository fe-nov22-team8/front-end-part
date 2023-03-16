import { Phone } from 'types/phoneTypes';
import { client } from 'utils/fetch';

export const getAllPhones = () => client.get<Phone[]>('/products');
