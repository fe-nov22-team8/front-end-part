/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { getDiscountPhones, getPhoneById } from 'api/phones';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Phone } from 'types/phoneType';
import './OnePhonePage.scss';
import '../../grid.scss';
import { BrandSlider } from 'Components/ShopBySlider';
import { Product } from 'types/productType';
import { TechSpecs } from './TechSesction';
import { AboutPhone } from './AboutSection';

export const OnePhonePage = () => {
  const [product, setProduct] = useState<Phone | null>(null);
  const [mainPhoto, setMainPhoto] = useState('');
  const [isError, setIsError] = useState<boolean>(false);
  const [discountPhones, setDiscountPhones] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllPhones = async () => {
      try {
        const discountPhones = await getDiscountPhones();

        setDiscountPhones(discountPhones);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchAllPhones();
  }, []);

  const { phoneSlug } = useParams();

  useEffect(() => {
    const getPhone = async () => {
      const data = await getPhoneById(phoneSlug);
      setProduct(data);
    };

    getPhone();
  }, [phoneSlug]);

  useEffect(() => {
    if (product?.images) {
      setMainPhoto(`${product?.images[0]}`);
    }
  }, [product?.images]);

  const changePhoneColor = (color: string) => {
    if (phoneSlug) {
      const colorToChange = phoneSlug.split('-').reverse();

      colorToChange[0] = color;

      return colorToChange.reverse().join('-');
    }

    return null;
  };

  const changePhoneCapacity = (capacity: string) => {
    if (phoneSlug) {
      const colorToChange = phoneSlug.split('-').reverse();

      colorToChange[1] = capacity.toLowerCase();

      return colorToChange.reverse().join('-');
    }

    return null;
  };

  if (product) {
    return (
      <div className="phone-page">
        <div className="phone-page__container">
          <div className="phone-page__header">
            <div className="history-block">
              <Link to="/" className="history-block__home" />
              <div className="history-block__arrow icon-arrow" />
              <Link className="history-block__title" to="/">
                Phones
              </Link>
              <div className="history-block__arrow icon-arrow" />
              <Link className="history-block__title" to="/">
                {product?.name}
              </Link>
            </div>
            <h1 className="phone-title">{product?.name}</h1>
          </div>

          <div className="phone-block grid">
            <div className="images grid__item--desktop-1-12 grid__item--tablet-1-6 grid__item--mobile-1-4">
              <div className="images-main ">
                <img
                  src={`https://back-end-part.onrender.com/${mainPhoto.replace(
                    'jpg',
                    'png',
                  )}`}
                  alt={product?.name}
                  height={442}
                  className="images-main__img"
                />
              </div>
              <div className="images-column">
                {product?.images.map((image) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  <div
                    className={classNames('images-column__item', {
                      'images-column__item--active': mainPhoto === image,
                    })}
                    key={product.images.indexOf(image)}
                    onClick={() => setMainPhoto(image)}
                  >
                    <img
                      src={`https://back-end-part.onrender.com/${image.replace(
                        'jpg',
                        'png',
                      )}`}
                      alt={product?.name}
                      className="images-column__img"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="purchase grid__item--desktop-14-20 grid__item--tablet-8-12 grid__item--mobile-1-4">
              <div className="purchase-color">
                <p className="purchase-name">Available colors</p>
                <div className="purchase-colors">
                  {product?.colorsAvailable.map((color) => (
                    <Link
                      key={color}
                      to={`/phones/${changePhoneColor(color)}`}
                      onClick={() => changePhoneColor(color)}
                      className={classNames(
                        'purchase-color__item',
                        `purchase-color__item--${color}`,
                        {
                          'purchase-color__item--active': product.name
                            .toLowerCase()
                            .includes(color),
                        },
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className="purchase-capacity">
                <p className="purchase-name">Select capacity</p>
                <div className="purchase-capacity__buttons">
                  {product?.capacityAvailable.map((capacity) => (
                    <Link
                      to={`/phones/${changePhoneCapacity(capacity)}`}
                      onClick={() => changePhoneCapacity(capacity)}
                      key={capacity}
                      type="button"
                      className={classNames('purchase-capacity__item', {
                        'purchase-capacity__item--active':
                          product.name.includes(capacity),
                      })}
                    >
                      {capacity}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="purchase-price">
                <p className="purchase-price__discont">
                  ${product?.priceDiscount}
                </p>
                <s className="purchase-price__full">${product?.priceRegular}</s>
              </div>
              <div className="purchase-buttons">
                <a
                  href="/"
                  className="purchase-buttons__add"
                  aria-label="add to cart"
                >
                  Add to cart
                </a>
                <a
                  href="/"
                  className="purchase-buttons__favorite"
                  aria-label="add to favorite"
                />
              </div>
              <div className="purchase-info">
                <div className="purchase-info__block">
                  <p className="purchase-name">Screen</p>
                  <p className="purchase-value">6.5” OLED</p>
                </div>
                <div className="purchase-info__block">
                  <p className="purchase-name">Resolution</p>
                  <p className="purchase-value">2688x1242</p>
                </div>
                <div className="purchase-info__block">
                  <p className="purchase-name">Processor</p>
                  <p
                    className="purchase-value
                  "
                  >
                    Apple A12 Bionic
                  </p>
                </div>
                <div className="purchase-info__block">
                  <p className="purchase-name">RAM</p>
                  <p className="purchase-value">3 GB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-block grid">
            <div className="techSpecs grid__item--desktop-1-12 grid__item--tablet-1-12 grid__item--mobile-1-4">
              <AboutPhone />
            </div>
            <div className="techSpecs grid__item--desktop-14-24 grid__item--tablet-1-12 grid__item--mobile-1-4">
              <TechSpecs phoneInfo={product} />
            </div>
          </div>

          <div>
            <BrandSlider phones={discountPhones} title="You may also like" />
          </div>
        </div>
      </div>
    );
  }

  return <div>loading</div>;
};
