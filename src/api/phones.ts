import { Phone } from 'types/phoneTypes';
import { client } from 'utils/fetch';

// запит за телефонами відносно параметрів, які користувач обирає на сторінці

export async function getAllPhonesByPage(
  page: number,
  size: number,
): Promise<Phone[]> {
  const response = await client.get<Phone[]>(
    `/products?page=${page}&size=${size}`,
  );

  return response;
}

// запит за усіма телефонами
export const getAllPhones = () => client.get<Phone[]>(`/products`);
