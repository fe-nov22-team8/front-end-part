/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Product } from 'types/productType';
import { getAllPhonesByPage } from 'api/phones';
import { ProductCard } from 'Components/ProductCard';
import { LoaderBox } from 'Components/LoaderBox';
import './PhonePage.scss';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'utils/searchHelper';
import { SearchBar } from 'Components/SearchBar';
import { Pagination } from './PaginationButtons';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).toString();
  const sortSearch = searchParams.get('sort') || 'name';
  const sizeSearch = searchParams.get('size') || '71';
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    const fetchAllPhones = async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const data = await getAllPhonesByPage(searchParam);
        setPhones(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchAllPhones();
  }, [searchParam]);

  const handleSortBy = (sort: string) => {
    if (sort === 'price') {
      const newSearchParams = getSearchWith(searchParams, {
        sort: 'price',
        order: 'asc',
      });

      setSearchParams(newSearchParams);
      return;
    }
    if (sort === 'year') {
      const newSearchParams = getSearchWith(searchParams, {
        sort: 'year',
        order: 'desc',
      });

      setSearchParams(newSearchParams);
      return;
    }

    const newSearchParams = getSearchWith(searchParams, {
      sort: 'name',
      order: 'asc',
    });

    setSearchParams(newSearchParams);
  };

  const handleItemsPerPage = (size: string) => {
    const newSearchParams = getSearchWith(searchParams, {
      size,
      page,
    });

    setSearchParams(newSearchParams);
  };

  const totalPage = Math.ceil(71 / +sizeSearch);

  const onPageChange = (newPageNum: number) => {
    const newSearchParams = getSearchWith(searchParams, {
      page: newPageNum,
    });

    setSearchParams(newSearchParams);
  };

  return (
    <section className="phones-page">
      <div className="phones-page__container">
        <div className="phones-page__header phones-page__grid">
          <div className="history-block">
            <Link to="/" className="history-block__home" />
            <div className="history-block__arrow icon-arrow" />
            <Link className="history-block__title" to="/">
              Phones
            </Link>
          </div>

          <div className="phones-page__filter">
            <div className="filterInputs">
              <h1 className="objectsTitle">Mobile phones</h1>
              <h5 className="objectsSubTitle">71 models</h5>
              <div className="filter">
                <div className="filter-wrap">
                  <div className="filter__sortBy sortBy">
                    <p className="sortBy__title">Sort by</p>
                    <select
                      className="sortBy__select"
                      onChange={(event) => handleSortBy(event.target.value)}
                      value={sortSearch}
                    >
                      <option className="select__option" value="name">
                        Choose one
                      </option>

                      <option className="select__option" value="year">
                        Newest
                      </option>

                      <option className="select__option" value="price">
                        Lowest price
                      </option>
                    </select>
                  </div>

                  <div className="filter__itemsOnPage sortBy">
                    <p className="sortBy__title">Items on page</p>
                    <select
                      onChange={(event) =>
                        handleItemsPerPage(event.target.value)
                      }
                      value={sizeSearch}
                      className="sortBy__select sortBy__select-items"
                      name="amount-select"
                      id="amount-select"
                    >
                      <option className="select__option" value="71">
                        All
                      </option>
                      <option className="select__option" value="4">
                        4
                      </option>
                      <option className="select__option" value="8">
                        8
                      </option>
                      <option className="select__option" value="16">
                        16
                      </option>
                    </select>
                  </div>
                </div>

                <SearchBar />
              </div>
            </div>
          </div>
        </div>

        {isLoading && (
          <div style={{ paddingTop: '200px' }}>
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

        {!!phones.length && (
          <div className="phones-page__buttons">
            <Pagination
              currentPage={+page}
              totalPage={totalPage}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};
