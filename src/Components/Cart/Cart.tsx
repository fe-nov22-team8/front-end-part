import { CartItem } from 'Components/CartItem';
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

export const Cart: React.FC = () => (
  <div className="container">
    <div className="cart grid">
      <Link
        to="/"
        className="nav__link
            cart__link--back
            grid__item--desktop-1-4
            grid__item--tablet-1-4
            grid__item--mobile-1-4"
      >
        <span className="cart__arrow" />
        Back
      </Link>
      <h1
        className="cart__h1
            grid__item--desktop-1-4
            grid__item--tablet-1-4
            grid__item--mobile-1-4"
      >
        Cart
      </h1>

      <div
        className="grid__item--desktop-1-4
        grid__item--tablet-1-4
        grid__item--mobile-1-4"
      >
        <CartItem />
      </div>

      <div
        className="grid__item--desktop-1-4
        grid__item--tablet-1-4
        grid__item--mobile-1-4"
      >
        <CartItem />
      </div>

      <div
        className="grid__item--desktop-1-4
        grid__item--tablet-1-4
        grid__item--mobile-1-4"
      >
        <CartItem />
      </div>
    </div>
  </div>
);
