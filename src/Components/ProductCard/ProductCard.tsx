/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/productType';
import { LocalStorageContext } from 'localStorageContex';
import { getUp } from '../../utils/getUp';

import './ProductCard.scss';

type Props = {
  phone: Product;
};

export const ProductCard: React.FC<Props> = React.memo(({ phone }) => {
  const { name, fullPrice, price, screen, capacity, ram, image, id, itemId } =
    phone;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);

  const {
    cartItems,
    favoritesItems,
    addToCart,
    removeFromCart,
    removeFavoritesItems,
    addToFavorites,
  } = useContext(LocalStorageContext);

  const checkAddToCart = () => {
    const cartItem = cartItems?.find(({ good }) => good.id === id);

    if (cartItem) {
      setIsAddedToCart(true);
    }
  };

  const checkAddToFavorites = () => {
    const favoriteItem = favoritesItems?.find((phone) => phone.id === id);

    if (favoriteItem) {
      setIsAddedToFavorite(true);
    }
  };

  useEffect(() => {
    checkAddToCart();
    checkAddToFavorites();
  }, [cartItems, isAddedToFavorite]);

  const henlerAddToCart = useCallback(() => {
    setIsAddedToCart(true);
    addToCart(phone);
  }, [cartItems]);

  const henlerRemoveToCart = useCallback(() => {
    setIsAddedToCart(false);
    removeFromCart(phone);
  }, [cartItems]);

  const henlerRemoveToFavorites = useCallback(() => {
    setIsAddedToFavorite(false);
    removeFavoritesItems(phone);
  }, [favoritesItems]);

  const henlerAddToFavorites = useCallback(() => {
    setIsAddedToFavorite(true);
    addToFavorites(phone);
  }, [favoritesItems]);

  const handlerEndPoint = () => {
    const product = itemId.split('-')[1];

    switch (true) {
      case product === 'iphone':
        return `/phones/${itemId}`;

      case product === 'ipad':
        return `/tablets/${itemId}`;

      default:
        return `/accessories/${itemId}`;
    }
  };

  return (
    <article className="product-card">
      <div className="product-card__container">
        <div onClick={() => handlerEndPoint()}>
          <Link to={handlerEndPoint()} onClick={getUp}>
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
          </Link>
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
        {isAddedToCart ? (
          <button
            type="button"
            onClick={henlerRemoveToCart}
            aria-label="remove from cart"
            className="product-card__button-add
            product-card__button-add--active
              "
          >
            Added
          </button>
        ) : (
          <button
            type="button"
            onClick={henlerAddToCart}
            className="product-card__button-add"
            aria-label="add to cart"
          >
            Add to cart
          </button>
        )}

        {isAddedToFavorite ? (
          <button
            type="button"
            onClick={henlerRemoveToFavorites}
            className="product-card__button-favorite product-card__button-favorite--active"
            aria-label="remove from favorite"
          />
        ) : (
          <button
            type="button"
            onClick={henlerAddToFavorites}
            className="product-card__button-favorite"
            aria-label="add to favorite"
          />
        )}
      </div>
    </article>
  );
});
