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

  return (
    <div className="checkout">
      <p className="checkout__total-sum">${totalPrice}</p>

      <span className="checkout__total-items">
        Total for {cartItems?.length} items
      </span>

      <Link to="/" className="checkout__btn">
        Checkout
      </Link>
    </div>
  );
};
