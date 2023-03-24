/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */

import classNames from 'classnames';
import { LocalStorageContext } from 'Components/Context';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/productType';
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

  const isCart = Boolean(cartItems?.find((item) => item.good.id === id));
  const isFavorites = Boolean(favoritesItems?.find((item) => item.id === id));

  useEffect(() => {
    setIsAddedToCart(isCart);
    setIsAddedToFavorite(isFavorites);
  }, [isCart, isFavorites]);

  const hendlerCart = useCallback(() => {
    if (isCart) {
      removeFromCart(phone);
      setIsAddedToCart(false);
      return;
    }

    addToCart(phone);
    setIsAddedToCart(true);
  }, [cartItems]);

  const hendlerFavorites = useCallback(() => {
    if (isFavorites && phone) {
      removeFavoritesItems(phone);
      setIsAddedToFavorite(false);
      return;
    }

    if (phone) {
      addToFavorites(phone);
      setIsAddedToFavorite(true);
    }
  }, [favoritesItems]);

  const handlerEndPoint = () => {
    const product = itemId.split('-')[1];

    switch (product) {
      case 'iphone':
        return `/phones/${itemId}`;

      case 'ipad':
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
        <button
          type="button"
          onClick={hendlerCart}
          className={classNames('product-card__button-add', {
            'product-card__button-add--active': isAddedToCart,
          })}
          aria-label={isAddedToCart ? 'remove from cart' : 'add to cart'}
        >
          {isAddedToCart ? 'Added' : 'Add to cart'}
        </button>

        <button
          type="button"
          onClick={hendlerFavorites}
          className={classNames('product-card__button-favorite', {
            'product-card__button-favorite--active': isAddedToFavorite,
          })}
          aria-label="add to favorite"
        />
      </div>
    </article>
  );
});
