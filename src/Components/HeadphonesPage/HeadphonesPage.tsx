/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-has-content */
import { getDiscountPhones } from 'api/phones';
import { BrandSlider } from 'Components/ShopBySlider';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/productType';
import '../../grid.scss';
import './HeadphonesPage.scss';

export const HeadphonesPage: React.FC = () => {
  const [discountPhones, setDiscountPhones] = useState<Product[]>([]);
  const [, setIsError] = useState(false);

  useEffect(() => {
    const fetchRecomendations = async () => {
      try {
        const discountPhones = await getDiscountPhones();

        setDiscountPhones(discountPhones);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchRecomendations();
  }, []);

  return (
    <div className="phone-page">
      <div className="phone-page__container">
        <div className="phone-page__header">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/accessories">
              Accessories
            </Link>
            <div className="history-block__arrow icon-arrow" />
          </div>
        </div>
        <div className="coming-soon" />
        <div>
          <BrandSlider phones={discountPhones} title="You may also like" />
        </div>
      </div>
    </div>
  );
};
