import { LocalStorageContext } from 'localStorageContex';
import React, { useContext } from 'react';
import { Modal } from '../Modal';

import './Checkout.scss';

export const Checkout: React.FC = () => {
  const { cartItems, handleModal } = useContext(LocalStorageContext);

  const getTotalPrice = () => {
    const total = cartItems
      ?.map((item) => item.good.price * item.count)
      .reduce((acc, price) => acc + price, 0);
    return total;
  };
  const modalCall = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setTimeout(handleModal, 200);
  };

  const totalPrice = getTotalPrice() || 0;
  const totalGoods = cartItems?.reduce((acc, item) => acc + item.count, 0);

  return (
    <div
      className="checkout grid__item--desktop-17-24
        grid__item--tablet-1-12
        grid__item--mobile-1-4"
    >
      <Modal shouldShowLocal={Boolean(totalPrice)} />
      <p className="checkout__total-sum">${totalPrice}</p>

      <span className="checkout__total-items">
        Total for {totalGoods} items
      </span>
      <button
        type="button"
        className="checkout__btn"
        onClick={modalCall}
        disabled={!cartItems?.length}
      >
        Checkout
      </button>
    </div>
  );
};
