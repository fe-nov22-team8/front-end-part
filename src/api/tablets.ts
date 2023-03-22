import { Product as Tablet } from 'types/productType';
import { client } from 'utils/fetch';

export const getAllTablets = async () => {
  const tablets = await client.get<Tablet[]>('/tablets');

  return tablets;
};
