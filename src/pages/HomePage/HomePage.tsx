import React, { useEffect, useState } from 'react';
import { getDiscountPhones, getNewPhones } from 'api/phones';
import { ShopByCategory } from 'Components/ShopByCategory';
import { TopSlider } from 'Components/TopSlider';
import { LoaderBox } from 'Components/LoaderBox';
import './HomePage.scss';
import { BrandSlider } from 'Components/ShopBySlider';
import { Product } from 'types/productType';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Product[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllPhones = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const newPhones = await getNewPhones();
        const discountPhones = await getDiscountPhones();

        setNewPhones(newPhones);
        setDiscountPhones(discountPhones);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchAllPhones();
  }, []);

  return (
    <div className="home-page">
      <div className="home-page__container">
        <section className="page__section page__section--1 welcome">
          <div className="grid grid--desktop">
            <div
              className="grid__item
            grid__item--desktop-1-18
            grid__item--tablet-1-9"
            >
              <h1 className="visually-hidden">Nice Gadgets store</h1>
              <h2 className="welcome__title">Welcome to Nice Gadgets store!</h2>
            </div>
          </div>

          <TopSlider />

          {!newPhones.length && <LoaderBox />}

          {!!newPhones.length && !isLoading && (
            <BrandSlider phones={newPhones} title="Brand new models" />
          )}

          {!newPhones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          <ShopByCategory />
          {!discountPhones.length && <LoaderBox />}

          {!!discountPhones.length && !isLoading && (
            <BrandSlider phones={discountPhones} title="Hot prices" />
          )}

          {!discountPhones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}
        </section>
      </div>
    </div>
  );
};
