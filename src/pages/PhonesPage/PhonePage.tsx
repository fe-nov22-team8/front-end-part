/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Phone } from 'types/phoneTypes';
import { getAllPhonesByPage } from 'api/phones';
import { ProductCard } from 'Components/ProductCard';
import { LoaderBox } from 'Components/LoaderBox';
import './PhonePage.scss';
import { useAppSelector } from 'utils/hooks';
import { HistoryBlock } from 'Components/HistoryBlock';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Item } from 'types/Item';
import { PaginationButtons } from './PaginationButtons';
import { Buttons } from './Buttons';
// import { Pagination } from './Pagination';

type Props = {
  changeCartItems: (
    item: Item,
    id: string,
    isAdded: boolean,
    items: Item[],
  ) => void;
  cartItems: Item[];
};

export const PhonesPage: React.FC<Props> = ({ changeCartItems, cartItems }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [itemsPerPage, updateItemsPerPage] = useState<number>(16);

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateItemsPerPage(+event.target.value);
  };

  // const { allPhones } = useAppSelector((state) => state.phones);
  // const { phonesOnPage, status: pagePhonesStatus } = useAppSelector(
  //   (state) => state.phonesPage,
  // );

  const fetchAllPhones = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const data = await getAllPhonesByPage(page, itemsPerPage);
      setPhones(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllPhones();
  }, [itemsPerPage]);

  // const onPageChange = (newPageNum: number) => {
  //   setPage(newPageNum);
  // };

  return (
    <section className="phones-page">
      <div className="phones-page__container">
        <div className="phones-page__header phones-page__grid">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/">
              Pnones
            </Link>
          </div>

          <div className="phones-page__filter">
            <div className="filterInputs">
              <h1 className="objectsTitle">Mobile phones</h1>
              <h5 className="objectsSubTitle">71 models</h5>
              <div className="filter">
                <div className="filter__sortBy sortBy">
                  <p className="sortBy__title">Sort by</p>

                  <select className="sortBy__select">
                    <option
                      className="select__option"
                      value="newest"
                      defaultChecked
                    >
                      Newest
                    </option>
                    <option className="select__option" value="alph">
                      Alphabetic
                    </option>
                    <option className="select__option" value="cheapest">
                      Cheapest
                    </option>
                  </select>
                </div>

                <div className="filter__itemsOnPage sortBy">
                  <p className="sortBy__title">Items on page</p>
                  <select
                    onChange={handleItemsPerPage}
                    value={itemsPerPage}
                    className="sortBy__select sortBy__select-items"
                    name="amount-select"
                    id="amount-select"
                  >
                    <option className="select__option" value="4">
                      4
                    </option>
                    <option className="select__option" value="8">
                      8
                    </option>
                    <option className="select__option" selected value="16">
                      16
                    </option>
                    <option className="select__option" value="all">
                      all
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading && (
          <div style={{ paddingTop: '150px' }}>
            <LoaderBox />
          </div>
        )}

        <div className="phones-page__all-phones all-phones">
          {!!phones.length &&
            !isLoading &&
            phones.map((phone) => (
              <ProductCard
                phone={phone}
                changeCartItems={changeCartItems}
                cartItems={cartItems}
                key={phone.id}
              />
            ))}

          {!phones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          {!phones.length && !isError && !isLoading && (
            <h2 className="headingError">There are no phones</h2>
          )}
        </div>

        <div className="buttons">
          <button
            type="button"
            className="buttons__button buttons__button--arrow"
          >
            <div className="icon-arrow icon-arrow--left" />
          </button>
          <button type="button" className="buttons__button">
            <div className="buttons__text">1</div>
          </button>
          <button type="button" className="buttons__button">
            <div className="buttons__text">2</div>
          </button>
          <button type="button" className="buttons__button">
            <div className="buttons__text">3</div>
          </button>
          <button type="button" className="buttons__button">
            <div className="buttons__text">4</div>
          </button>
          <button
            type="button"
            className="buttons__button buttons__button--arrow"
          >
            <div className="icon-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};
