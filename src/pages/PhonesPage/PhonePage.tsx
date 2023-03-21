/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { sort } from 'types/sortBy';
import { Phone } from 'types/phoneTypes';
import { getAllPhonesByPage } from 'api/phones';
import { ProductCard } from 'Components/ProductCard';
import { LoaderBox } from 'Components/LoaderBox';
import './PhonePage.scss';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
import { Pagination } from './PaginationButtons';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [size, updateItemsPerPage] = useState<number>(16);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>(sort.Newest);
  const order =
    sortBy === sort.Newest || sortBy === sort.Expensive ? 'desc' : 'asc';
  console.log(order);
  const handleSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSortBy(value);
  };

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateItemsPerPage(+event.target.value);
    setPage(1);
  };

  useEffect(() => {
    const fetchAllPhones = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const data = await getAllPhonesByPage(page, size, sortBy, order);
        setPhones(data);
        setTotalPages(Math.ceil(data.length / size));
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchAllPhones();
  }, [page, size, sortBy, order]);

  const onPageChange = (newPageNum: number) => {
    setPage(newPageNum);
  };

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
                  <select className="sortBy__select" onChange={handleSortBy}>
                    <option
                      className="select__option"
                      value={sort.Newest}
                      defaultChecked
                    >
                      Newest
                    </option>
                    <option className="select__option" value={sort.Alphabet}>
                      Alphabetically
                    </option>
                    <option className="select__option" value={sort.Cheapest}>
                      Cheapest
                    </option>
                    <option className="select__option" value={sort.Expensive}>
                      Expensive
                    </option>
                  </select>
                </div>

                <div className="filter__itemsOnPage sortBy">
                  <p className="sortBy__title">Items on page</p>
                  <select
                    onChange={handleItemsPerPage}
                    value={size}
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
            phones.map((phone) => <ProductCard phone={phone} key={phone.id} />)}

          {!phones.length && isError && (
            <h2 className="headingError">Something went wrong</h2>
          )}

          {!phones.length && !isError && !isLoading && (
            <h2 className="headingError">There are no phones</h2>
          )}
        </div>
        <div className="phones-page__buttons">
          <Pagination
            currentPage={page}
            totalPages={8}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </section>
  );
};
