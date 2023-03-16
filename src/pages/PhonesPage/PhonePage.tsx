import { ProductCard } from 'Components/ProductCard';
import React from 'react';
import { Phone } from 'types/phoneTypes';

type Props = {
  phones: Phone[];
};

export const PhonesPage: React.FC<Props> = ({ phones }) => (
  <section>
    {phones.map((phone) => (
      <ProductCard key={phone.id} phone={phone} />
    ))}
  </section>
);
