/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { getDiscountPhones, getPhoneById, getProductById } from 'api/phones';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { LocalStorageContext } from 'localStorageContex';
import { Phone } from 'types/phoneType';
import './OnePhonePage.scss';
import '../../grid.scss';
import { Product } from 'types/productType';
import { BrandSlider } from 'Components/ShopBySlider';
import { LoaderBox } from 'Components/LoaderBox';
import { TechSpecs } from './TechSesction';
import { AboutPhone } from './AboutSection';
import { AboutTablet } from './AboutSectionTablet';

export const OnePhonePage = () => {
  const [product, setProduct] = useState<Phone | null>(null);
  const [mainPhoto, setMainPhoto] = useState('');
  const [, setIsError] = useState<boolean>(false);
  const [discountPhones, setDiscountPhones] = useState<Product[]>([]);
  const { phoneSlug } = useParams();

  const [phone, setPhone] = useState<Product>();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);

  const {
    cartItems,
    favoritesItems,
    addToCart,
    removeFromCart,
    removeFavoritesItems,
    addToFavorites,
  } = useContext(LocalStorageContext);

  const isCart = Boolean(cartItems?.find((item) => item.good.id === phone?.id));
  const isFavorites = Boolean(
    favoritesItems?.find((item) => item.id === phone?.id),
  );

  const productName = phoneSlug?.split('-')[1];
  const navigate = useNavigate();

  const hendlerCart = () => {
    if (isCart && phone) {
      removeFromCart(phone);
      setIsAddedToCart(false);
      return;
    }

    if (phone) {
      addToCart(phone);
      setIsAddedToCart(true);
    }
  };

  useEffect(() => {
    setIsAddedToCart(isCart);
    setIsAddedToFavorite(isFavorites);
  }, [isCart, isFavorites]);

  const hendlerFavorites = () => {
    if (isFavorites && phone) {
      removeFavoritesItems(phone);
      setIsAddedToFavorite(false);
      return;
    }

    if (phone) {
      addToFavorites(phone);
      setIsAddedToFavorite(true);
    }
  };

  const fetchProductById = useCallback(async () => {
    try {
      const product = await getProductById(phoneSlug);

      setPhone(product);
    } catch {
      setIsError(true);
    }
  }, [phoneSlug]);

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

  useEffect(() => {
    const getProduct = async () => {
      const data = await getPhoneById(phoneSlug);

      setProduct(data);
    };

    getProduct();
    fetchProductById();
  }, [fetchProductById, phoneSlug]);

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
              <Link className="history-block__title" to="/phones">
                Phones
              </Link>
              <div className="history-block__arrow icon-arrow" />
              <Link className="history-block__title" to="/">
                {product?.name}
              </Link>
            </div>
            <Link
              to="#"
              onClick={() => navigate(-1)}
              className="
              phone-page__back
          cart__link--back
          grid__item--desktop-1-4
          grid__item--tablet-1-4
          grid__item--mobile-1-4"
            >
              <span className="cart__arrow" />
              Back
            </Link>
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
                  {product?.colors_available.map((color) => (
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
                <button
                  type="button"
                  onClick={hendlerCart}
                  className={classNames('product-card__button-add', {
                    'product-card__button-add--active': isAddedToCart,
                  })}
                  aria-label="add to cart"
                >
                  {isAddedToCart ? 'Added' : 'Add to cart'}
                </button>
                <button
                  type="button"
                  onClick={hendlerFavorites}
                  className={classNames('product-card__button-favorite', {
                    'product-card__button-favorite--active': isAddedToFavorite,
                  })}
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

          <div className="phone-block phone-block--bottom grid">
            <div className="techSpecs grid__item--desktop-1-12 grid__item--tablet-1-12 grid__item--mobile-1-4">
              {productName === 'ipad' ? <AboutTablet /> : <AboutPhone />}
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

  return (
    <div className="phone-page">
      <LoaderBox />
    </div>
  );
};
