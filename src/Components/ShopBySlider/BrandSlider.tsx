/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ProductCard } from 'Components/ProductCard';
import React from 'react';
import { Product } from 'types/productType';
import './BrandSlider.scss';

type Props = {
  phones: Product[];
  title: string;
};

export const BrandSlider: React.FC<Props> = ({ phones, title }) => {
  const id = `${title.split(' ').join('-').toLowerCase()}-cards-slider-block`;

  const leftButtonHandler = () => {
    const block = document.getElementById(id);

    if (block) {
      block.style.scrollBehavior = 'smooth';
      block.scrollTo(0, 0);
    }
  };

  const rightButtonHandler = () => {
    const block = document.getElementById(id);

    if (block) {
      block.style.scrollBehavior = 'smooth';
      block.scrollTo(570, 570);
    }
  };

  return (
    <section
      className="
    page__section
    page__section--2
    cards-slider
    "
    >
      <div className="cards-slider__container">
        <div className="cards-slider__top">
          <h2 className="cards-slider__title">{title}</h2>

          <div className="cards-slider__buttons">
            <a className="cards-slider__button" onClick={leftButtonHandler}>
              <div className="arrow-icon arrow-icon--left" />
            </a>

            <a className="cards-slider__button" onClick={rightButtonHandler}>
              <div className="arrow-icon arrow-icon--right" />
            </a>
          </div>
        </div>

        <ul id={id} className="cards-slider__phone">
          {phones.map((phone: Product) => (
            <li key={phone.id}>
              <ProductCard phone={phone} key={phone.id} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
