import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../FavoritesPage/FavoritesPage.scss';
import { Product as Tablet } from 'types/productType';
import { getAllTablets } from 'api/tablets';
import { LoaderBox } from 'Components/LoaderBox';
import { ProductCard } from 'Components/ProductCard';

export const TabletPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const getAllTabletsFromServer = async () => {
    try {
      setIsError(false);

      const tabletsFromServer = await getAllTablets();

      setIsLoading(false);
      setTablets(tabletsFromServer);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTabletsFromServer();
  }, []);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        <div className="favorites-page__grid">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/tablets">
              Tablets
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

        {isLoading && (
          <div style={{ paddingTop: '150px' }}>
            <LoaderBox />
          </div>
        )}

        <div className="phones-page__all-phones all-phones">
          {!!tablets.length &&
            !isLoading &&
            tablets.map((tablet) => (
              <ProductCard phone={tablet} key={tablet.id} />
            ))}

          {!tablets.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          {!tablets.length && !isError && !isLoading && (
            <h2 className="headingError">There are no tablets</h2>
          )}
        </div>
      </div>
    </div>
  );
};
