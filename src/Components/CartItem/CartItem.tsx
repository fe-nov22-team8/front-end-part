/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import './CartItem.scss';

export const CartItem: React.FC = () => (
  <div
    className="cart-item
    grid__item--desktop-1-4
    grid__item--tablet-1-4
    grid__item--mobile-1-4"
  >
    <div className="cart-item__info">
      <span className="cart-item__button-close"> </span>

      <div className="cart-item__discription">
        <Link to="/">
          <img
            src=""
            // alt="Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)"
            className="cart-item__image"
          />
        </Link>

        <p className="cart-item__name">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>
    </div>

    <div className="cart-item__price-container">
      <div className="cart-item__counter-block">
        <a className="icon-cart icon__minus"> </a>

        <span className="cart-item__counter">0</span>

        <a className="icon-cart icon__plus"> </a>
      </div>

      <div className="cart-item__total-price">$1099</div>
    </div>
  </div>
);
