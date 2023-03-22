import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.scss';

export const EmptyCart = () => (
  <div
    className="empty-cart grid__item--desktop-1-16
      grid__item--tablet-1-12
      grid__item--mobile-1-4"
  >
    <h2 className="empty-cart__title">Your cart is empty</h2>
    <p className="empty-cart__item">
      Go to the product page to choose something to buy 👇
    </p>
    <Link to="/phones" className="btn-link">
      Go to products
    </Link>
  </div>
);
