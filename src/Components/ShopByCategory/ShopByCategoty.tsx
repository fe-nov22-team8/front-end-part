import React from 'react';
import './ShopByCategory.scss';
import { Link } from 'react-router-dom';
// import fotoCategory1 from 'Category-2.pn';
// import fotoCategory2 from 'Category-2.png';
// import fotoCategory3 from 'Category-3.png';

export const ShopByCategory: React.FC = () => (
  <div
    className="
      shopByCategory
      page__section
      page__section--1
      "
  >
    <h2 className="shopByCategory__title">Shop by category</h2>

    <div className="shopByCategory__sections section">
      <div className="section__first">
        <Link
          to="/phones"
          className="section__img section__img--1"
          aria-label="phones category"
        />

        <h3 className="section__title">Mobile phones</h3>

        <p className="section__numberOfModels">71 models</p>
      </div>

      <div className="section__second">
        <Link
          to="/tablets"
          className="section__img section__img--2"
          aria-label="tablets category"
        />

        <h3 className="section__title">Tablets</h3>

        <p className="section__numberOfModels">2 models</p>
      </div>

      <div className="section__third">
        <Link
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
