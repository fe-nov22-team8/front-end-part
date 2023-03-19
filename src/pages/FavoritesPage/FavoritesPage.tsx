import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks';
import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const { currentFavorites } = useAppSelector((state) => state.favorites);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        <div className="favorites-page__grid">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/">
              Favourites
            </Link>
          </div>
          <div className="favorites-page__text">
            <h1 className="visually-hidden">
              Nice Gadgets store, favorites section
            </h1>
            <h2 className="favorites-page__title">Favourites</h2>
            <div className="favorites-page__models-number">
              {currentFavorites.length} models
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
