import { CartItem } from 'Components/CartItem';
import { Checkout } from 'Components/Checkout';
import { LocalStorageContext } from 'localStorageContex';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

export const Cart: React.FC = () => {
  const { cartItems } = useContext(LocalStorageContext);

  return (
    <div className="container">
      <div className="cart grid">
        <div className="history-block">
          <Link to="/" className="history-block__home" />
          <div className="history-block__arrow icon-arrow" />
          <Link className="history-block__title" to="/">
            Back
          </Link>
        </div>
        <h1
          className="cart__h1
              grid__item--desktop-1-4
              grid__item--tablet-1-4
              grid__item--mobile-1-4"
        >
          Cart
        </h1>

        <div
          className="grid__item--desktop-1-16
          grid__item--tablet-1-12
          grid__item--mobile-1-4"
        >
          {cartItems?.map((item) => (
            <CartItem item={item} key={item.good.id} />
          ))}
        </div>
        <div
          className="grid__item--desktop-17-24
          grid__item--tablet-1-12
          grid__item--mobile-1-4"
        >
          <Checkout />
        </div>
      </div>
    </div>
  );
};
