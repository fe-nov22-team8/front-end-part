import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../FavoritesPage/FavoritesPage.scss';
import { LoaderBox } from 'Components/LoaderBox';
import { ProductCard } from 'Components/ProductCard';
import { Accessory } from 'types/accessory';
import { getAllAccessories } from 'api/accessories';

export const AccessoriesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const getAllAccessoriesFromServer = async () => {
    try {
      setIsError(false);

      const accessoriesFromServer = await getAllAccessories();

      setIsLoading(false);
      setAccessories(accessoriesFromServer);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllAccessoriesFromServer();
  }, []);

  return (
    <div className="phones-page">
      <div className="phones-page__container">
        <div className="favorites-page__grid">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/accessories">
              Accessories
            </Link>
          </div>
          <div className="favorites-page__text">
            <h1 className="visually-hidden">
              Nice Gadgets store, accessories section
            </h1>
            <h2 className="favorites-page__title">Accessories</h2>
            <div className="favorites-page__models-number">4 models</div>
          </div>
        </div>

        {isLoading && (
          <div style={{ paddingTop: '150px' }}>
            <LoaderBox />
          </div>
        )}

        <div className="phones-page__all-phones all-phones">
          {!!accessories.length &&
            !isLoading &&
            accessories.map((acces) => {
              const {
                id,
                category,
                itemId,
                fullPrice,
                price,
                name,
                color,
                year,
                image,
              } = acces;
              const accessory = {
                id,
                category,
                itemId,
                fullPrice,
                price,
                name,
                color,
                year,
                image,
                phoneId: '-',
                screen: '-',
                capacity: '-',
                ram: '-',
              };

              return <ProductCard phone={accessory} key={accessory.id} />;
            })}

          {!accessories.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          {!accessories.length && !isError && !isLoading && (
            <h2 className="headingError">There are no accessories</h2>
          )}
        </div>
      </div>
    </div>
  );
};
