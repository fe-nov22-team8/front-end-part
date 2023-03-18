import React from 'react';
import { Link } from 'react-router-dom';

import './Checkout.scss';

export const Checkout: React.FC = () => (
  <div className="checkout">
    <p className="checkout__total-sum">$2657</p>

    <span className="checkout__total-items">Total for 3 items</span>

    <Link to="/" className="checkout__btn">
      Checkout
    </Link>
  </div>
);
