/* eslint-disable jsx-a11y/anchor-is-valid */
import { CartItem } from 'Components/CartItem';
import { Checkout } from 'Components/Checkout';
import { LocalStorageContext } from 'Components/Context';
import { EmptyCart } from 'Components/EmptyCart';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.scss';

export const Cart: React.FC = () => {
  const { cartItems } = useContext(LocalStorageContext);

  const navigate = useNavigate();

  const isCartEmpty = cartItems?.length === 0;

  return (
    <div className="container">
      <div className="cart grid">
        <Link
          to="#"
          onClick={() => navigate(-1)}
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
          className="cart__content
            grid
            grid__item--desktop-1-24
            grid__item--tablet-1-12
            grid__item--mobile-1-4"
        >
          {isCartEmpty ? (
            <EmptyCart />
          ) : (
            <div
              className="cart__list
                grid__item--desktop-1-16
                grid__item--tablet-1-12
                grid__item--mobile-1-4"
            >
              {cartItems?.map((item) => (
                <CartItem item={item} key={item.good.id} />
              ))}
            </div>
          )}

          <Checkout />
        </div>
      </div>
    </div>
  );
};
