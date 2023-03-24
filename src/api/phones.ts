import { Phone } from 'types/phoneType';
import { Product } from 'types/productType';
import { client } from 'utils/fetch';
import { ProductData } from 'types/productData';

// запит за телефонами відносно параметрів, які користувач обирає на сторінці

export async function getAllPhonesByPage(
  searchParam: string,
): Promise<Product[]> {
  const response = await client.get<Product[]>(`/products?${searchParam}`);

  return response;
}

export const getPhoneById = (phoneId = '') =>
  client.get<Phone>(`/phones/${phoneId}`);

export const getNewPhones = async () => {
  const response = await client.get<Product[]>(`/products/new`);
  return response;
};

export const getDiscountPhones = async () => {
  const response = await client.get<Product[]>(`/products/discount`);
  return response;
};

export const getRecommendedPhones = async (phoneId: string | undefined) => {
  const response = await client.get<Product[]>(
    `/products/${phoneId}/recommended`,
  );
  return response;
};

// запит за усіма телефонами
export const getAllPhones = async () => {
  const response = await client.get<Product[]>(`/products`);

  return response;
};
