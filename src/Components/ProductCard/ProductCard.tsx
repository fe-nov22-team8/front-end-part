import React from 'react';
import { Phone } from 'types/phoneTypes';

import './ProductCard.scss';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { name, fullPrice, price, screen, capacity, ram, image } = phone;

  return (
    <article className="product-card">
      <div>
        <img
          src={`https://back-end-part.onrender.com/${image.replace(
            'jpg',
            'png',
          )}`}
          alt={name}
          className="product-card__image"
        />
      </div>

      <h2 className="product-card__header">{name}</h2>

      <div className="product-card__price-container">
        <p className="product-card__discont">${price}</p>
        <p className="product-card__full">${fullPrice}</p>
      </div>

      <div className="product-card__details">
        <p className="product-card__details-title">Screen</p>

        <p className="product-card__details-value">{screen}</p>
      </div>

      <div className="product-card__details">
        <p className="product-card__details-title">Capacity</p>

        <p className="product-card__details-value">{capacity}</p>
      </div>

      <div className="product-card__details">
        <p className="product-card__details-title">RAM</p>

        <p className="product-card__details-value">{ram}</p>
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
};
