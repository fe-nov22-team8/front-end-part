import React from 'react';
import { Phone } from 'types/phoneTypes';

import './ProductCard.scss';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => (
  <article className="product-card">
    <div>
      <img
        src=""
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className="product-card__image"
      />
    </div>

    <h2 className="product-card__header">
      Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
    </h2>

    <div className="product-card__price-container">
      <p className="product-card__discont">$799</p>
      <p className="product-card__full">$899</p>
    </div>

    <div className="product-card__details">
      <p className="product-card__details-title">Screen</p>

      <p className="product-card__details-value">5.8” OLED</p>
    </div>

    <div className="product-card__details">
      <p className="product-card__details-title">Capacity</p>

      <p className="product-card__details-value">64 GB</p>
    </div>

    <div className="product-card__details">
      <p className="product-card__details-title">RAM</p>

      <p className="product-card__details-value">4 GB</p>
    </div>

    <div className="product-card__button-container">
      <button type="button" className="product-card__button">
        Add to cart
      </button>

      <button type="button" className="product-card__button-favorite">
        <i className="icon-heart" />
      </button>
    </div>
  </article>
);
