import React, { useEffect, useState } from 'react';
import { getAllPhones } from 'api/phones';
import { ShopByCategory } from 'Components/ShopByCategory';
import { TopSlider } from 'Components/TopSlider';
import { LoaderBox } from 'Components/LoaderBox';
import './HomePage.scss';
import { BrandSlider } from 'Components/ShopBySlider';
import { Product } from 'types/productType';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllPhones = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const data = await getAllPhones();
        setPhones(data);
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

          {!phones.length && <LoaderBox />}

          {!!phones.length && !isLoading && (
            <BrandSlider
              phones={phones?.slice(10, 20)}
              title="Brand new models"
            />
          )}

          {!phones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          <ShopByCategory />
          {!phones.length && <LoaderBox />}

          {!!phones.length && !isLoading && (
            <BrandSlider phones={phones?.slice(0, 10)} title="Hot prices" />
          )}

          {!phones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}
        </section>
      </div>
    </div>
  );
};
