import { client } from 'utils/fetch';
import { Accessory } from 'types/accessory';

export const getAllAccessories = async () => {
  const accessories = await client.get<Accessory[]>('/accessories');

  return accessories;
};
