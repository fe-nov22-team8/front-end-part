import React from 'react';
import { Link } from 'react-router-dom';
import '../FavoritesPage/FavoritesPage.scss';

export const TabletPage: React.FC = () => (
  <div className="phones-page">
    <div className="phones-page__container">
      <div className="favorites-page__grid">
        <div className="history-block">
          <Link to="/" className="history-block__home" />
          <div className="history-block__arrow icon-arrow" />
          <Link className="history-block__title" to="/">
            Pnones
          </Link>
        </div>
        <div className="favorites-page__text">
          <h1 className="visually-hidden">
            Nice Gadgets store, tablets section
          </h1>
          <h2 className="favorites-page__title">Tablets</h2>
          <div className="favorites-page__models-number">2 models</div>
        </div>
      </div>
    </div>
  </div>
);
