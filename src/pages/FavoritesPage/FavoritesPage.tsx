import { ProductCard } from 'Components/ProductCard';
import { LocalStorageContext } from 'localStorageContex';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './FavoritesPage.scss';

export const FavoritesPage: React.FC = () => {
  const { favoritesItems } = useContext(LocalStorageContext);

  return (
    <div className="favorites-page">
      <div className="favorites-page__container">
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
            {favoritesItems?.length} items
          </div>
        </div>
        <div className="favorites-page__all-favorites all-phones">
          {favoritesItems?.map((phone) => (
            <ProductCard phone={phone} key={phone.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
