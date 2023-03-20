import { Phone } from 'types/phoneTypes';
import { client } from 'utils/fetch';

// запит за телефонами відносно параметрів, які користувач обирає на сторінці

export async function getAllPhonesByPage(
  page: number,
  size: number,
  sort: string,
  order: string,
): Promise<Phone[]> {
  const sortBy =
    sort === 'up' || sort === 'down'
      ? 'price'
      : sort === 'name'
      ? 'name'
      : 'year';

  const response = await client.get<Phone[]>(
    `/products?page=${page}&size=${size}&sort=${sortBy}&order=${order}`,
  );

  return response;
}

// запит за усіма телефонами
export const getAllPhones = () => client.get<Phone[]>(`/products`);
