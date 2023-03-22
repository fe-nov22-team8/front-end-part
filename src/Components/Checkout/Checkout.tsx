import { LocalStorageContext } from 'localStorageContex';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Checkout.scss';

export const Checkout: React.FC = () => {
  const { cartItems } = useContext(LocalStorageContext);

  const getTotalPrice = () => {
    const total = cartItems
      ?.map((item) => item.good.price * item.count)
      .reduce((acc, price) => acc + price, 0);
    return total;
  };

  const totalPrice = getTotalPrice();
  const totalGoods = cartItems?.reduce((acc, item) => acc + item.count, 0);

  return (
    <div
      className="checkout grid__item--desktop-17-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <p className="checkout__total-sum">${totalPrice}</p>

      <span className="checkout__total-items">
        Total for {totalGoods} items
      </span>

      <Link to="/" className="checkout__btn">
        Checkout
      </Link>
    </div>
  );
};
