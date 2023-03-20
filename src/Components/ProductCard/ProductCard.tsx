/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { Item } from 'types/Item';
import { Phone } from 'types/phoneTypes';

import './ProductCard.scss';

type Props = {
  phone: Phone;
  changeCartItems: (
    item: Item,
    id: string,
    isAdded: boolean,
    items: Item[],
  ) => void;
  cartItems: Item[];
};

export const ProductCard: React.FC<Props> = ({
  phone,
  changeCartItems,
  cartItems,
}) => {
  const { name, fullPrice, price, screen, capacity, ram, image, id } = phone;
  const [isAddToCart, setIsAddToCart] = useState(false);

  const handlerAddToCart = () => {
    const cartItem = { id, name, price, image };

    setIsAddToCart(!isAddToCart);

    changeCartItems(cartItem, id, isAddToCart, cartItems);
  };

  return (
    <article className="product-card">
      <div className="product-card__container">
        <div>
          <img
            src={`https://back-end-part.onrender.com/${image.replace(
              'jpg',
              'png',
            )}`}
            alt={name}
            width="208px"
            height="196px"
            className="product-card__image"
          />
        </div>
      </div>

      <h2 className="product-card__title">{name}</h2>

      <div className="product-card__price-container">
        <p className="product-card__discont">${price}</p>
        <p className="product-card__full">${fullPrice}</p>
      </div>

      <div className="product-card__details">
        <p className="product-card__detail">
          <span className="product-card__detail-name">Screen</span>

          <span className="product-card__detail-value">{screen}</span>
        </p>

        <p className="product-card__detail">
          <span className="product-card__detail-name">Capacity</span>

          <span className="product-card__detail-value">{capacity}</span>
        </p>

        <p className="product-card__detail">
          <span className="product-card__detail-name">RAM</span>

          <span className="product-card__detail-value">{ram}</span>
        </p>
      </div>

      <div className="product-card__button-container">
        <button
          type="button"
          onClick={handlerAddToCart}
          className="product-card__button-add"
          aria-label="add to cart"
        >
          Add to cart
        </button>

        <a
          href="/"
          className="product-card__button-favorite"
          aria-label="add to favorite"
        />
      </div>
    </article>
  );
};
