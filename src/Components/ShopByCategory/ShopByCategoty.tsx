import React from 'react';
import './ShopByCategory.scss';
import { Link } from 'react-router-dom';
import { getUp } from 'utils/getUp';

export const ShopByCategory: React.FC = () => (
  <div className="shopByCategory__sections">
    <h2 className="shopByCategory__title">Shop by category</h2>

    <div className="section">
      <div className="section__first">
        <Link
          to="/phones"
          onClick={getUp}
          className="section__img section__img--1"
          aria-label="phones category"
        />

        <h3 className="section__title">Mobile phones</h3>

        <p className="section__numberOfModels">71 models</p>
      </div>

      <div className="section__second">
        <Link
          to="/tablets"
          onClick={getUp}
          className="section__img section__img--2"
          aria-label="tablets category"
        />

        <h3 className="section__title">Tablets</h3>

        <p className="section__numberOfModels">2 models</p>
      </div>

      <div className="section__third">
        <Link
          onClick={getUp}
          to="/accessories"
          className="section__img section__img--3"
          aria-label="accessories category"
        />

        <h3 className="section__title">Accessories</h3>

        <p className="section__numberOfModels">4 models</p>
      </div>
    </div>
  </div>
);
