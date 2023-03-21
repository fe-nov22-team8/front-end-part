/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { getPhoneById } from 'api/phones';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'types/phoneType';
import './OnePhonePage.scss';
import '../../grid.scss';
import { TechSpecs } from './TechSesction';
import { AboutPhone } from './AboutSection';

export const OnePhonePage = () => {
  const [iphone, setIphone] = useState<Phone | null>(null);

  useEffect(() => {
    const getPhone = async () => {
      const data = await getPhoneById('apple-iphone-11-128gb-black');
      setIphone(data);
    };

    getPhone();
  }, []);

  if (iphone) {
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
                {iphone?.name}
              </Link>
            </div>
            <h1 className="phone-title">{iphone?.name}</h1>
          </div>
          <div className="phone-block grid">
            <div className="images grid__item--desktop-1-12">
              <div className="images-column">
                {iphone?.images.map((image) => (
                  <div
                    className="images-column__item"
                    key={iphone.images.indexOf(image)}
                  >
                    <img
                      src={`https://back-end-part.onrender.com/${image.replace(
                        'jpg',
                        'png',
                      )}`}
                      alt={iphone?.name}
                      height={66}
                    />
                  </div>
                ))}
              </div>
              <div className="images-main ">
                <img
                  src={`https://back-end-part.onrender.com/${iphone?.images[0].replace(
                    'jpg',
                    'png',
                  )}`}
                  alt={iphone?.name}
                  height={442}
                />
              </div>
            </div>
            <div className="purchase grid__item--desktop-14-20">
              <div className="purchase-color">
                <p className="purchase-name">Available colors</p>
                <div className="purchase-colors">
                  {iphone?.colorsAvailable.map((color) => (
                    <button
                      key={color}
                      type="button"
                      className={classNames(
                        'purchase-color__item',
                        `purchase-color__item--${color}`,
                        {
                          'purchase-color__item--active': iphone.name
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
                  {iphone?.capacityAvailable.map((capacity) => (
                    <button
                      key={capacity}
                      type="button"
                      className={classNames('purchase-capacity__item', {
                        'purchase-capacity__item--active':
                          iphone.name.includes(capacity),
                      })}
                    >
                      {capacity}
                    </button>
                  ))}
                </div>
              </div>
              <div className="purchase-price">
                <p className="purchase-price__discont">
                  ${iphone?.priceDiscount}
                </p>
                <s className="purchase-price__full">${iphone?.priceRegular}</s>
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
            <div className="techSpecs grid__item--desktop-1-12">
              <AboutPhone />
            </div>
            <div className="techSpecs grid__item--desktop-14-24">
              <TechSpecs phoneInfo={iphone} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>huy</div>;
};
