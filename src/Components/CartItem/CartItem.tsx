/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import { ItemCart, LocalStorageContext } from 'Components/Context';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './CartItem.scss';

type Props = {
  item: ItemCart;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { good, count } = item;

  const { addToCart, removeFromCart, removeOneItem } =
    useContext(LocalStorageContext);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span
          onClick={() => removeFromCart(good)}
          className=" cart-item__button-close"
        >
          {' '}
        </span>

        <div className="cart-item__discription">
          <Link to={`/phones/${good.id}`}>
            <img
              src={`https://back-end-part.onrender.com/${good.image.replace(
                'jpg',
                'png',
              )}`}
              alt={good.name}
              className="card__img card__img--cart"
            />
          </Link>

          <p className="cart-item__name">{good.name}</p>
        </div>
      </div>

      <div className="cart-item__price-block">
        <div className="cart-item__icons-block">
          <button
            onClick={() => removeOneItem(good)}
            className="icon icon__cart-item icon__cart-item--minus"
          >
            {' '}
          </button>

          <span className="cart-item__counter">{count}</span>

          <button
            onClick={() => addToCart(good)}
            className="icon
            icon__cart-item
            icon__cart-item--plus"
          >
            {' '}
          </button>
        </div>

        <div className="cart-item__total-price">${good.price}</div>
      </div>
    </div>
  );
};
