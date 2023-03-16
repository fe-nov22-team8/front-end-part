/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { Phone } from 'types/phoneTypes';
import { getAllPhones } from 'api/phones';
import { useAppSelector } from 'utils/hooks';
import { ProductCard } from 'Components/ProductCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FilterInputs } from 'Components/FilterInputs';
import { LoaderBox } from 'Components/LoaderBox';
import { PaginationButtons } from './PaginationButtons';
import './PhonePage.scss';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const { phonesOnPage, status: pagePhonesStatus } = useAppSelector(
    (state) => state.phonesPage,
  );
  const [page, setPage] = useState<number>(1);
  const [onPage, setOnPage] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>('Newest');

  const fetchAllPhones = async () => {
    try {
      const data = await getAllPhones();
      setPhones(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      // setError(true);
    }
  };

  useEffect(() => {
    fetchAllPhones();
  }, []);

  const onPageChange = (newPageNum: number) => {
    setPage(newPageNum);
  };

  const onChangeOnPage = (newOnPageNum: number) => {
    setOnPage(newOnPageNum);
  };

  const onSortByChange = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  const sortPhonesOnPage = (prev: Phone, curr: Phone) => {
    switch (sortBy) {
      case 'Newest':
        return curr.year - prev.year;
      case 'Cheapest':
        return prev.price - curr.price;
      case 'Expensive':
        return curr.price - prev.price;
      case 'Alphabetic':
        return prev.name.localeCompare(curr.name);
      default:
        return 0;
    }
  };

  return (
    <section className="phones-page">
      <div className="phones-page__container">
        {pagePhonesStatus === 'loading' && (
          <div style={{ paddingTop: '150px' }}>
            <LoaderBox />
          </div>
        )}
        javascript
        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__header phones-page__grid">
            <div className="phones-page__filter">
              <FilterInputs
                currentOnPage={onPage}
                changeOnPage={onChangeOnPage}
                sortBy={sortBy}
                changeSortBy={onSortByChange}
              />
            </div>
          </div>
        )}
        {phones && pagePhonesStatus === 'idle' && (
          <div>
            <TransitionGroup className="phones-page__all-phones all-phones">
              {phones
                .slice((page - 1) * onPage, page * onPage)
                .sort(sortPhonesOnPage)
                .map((phone) => (
                  <div key={phone.itemId}>
                    <CSSTransition timeout={1000} classNames="phones-page-list">
                      <ProductCard key={phone.id} phone={phone} />
                    </CSSTransition>
                  </div>
                ))}
            </TransitionGroup>
          </div>
        )}
        {phonesOnPage && pagePhonesStatus === 'idle' && (
          <div className="phones-page__buttons">
            <PaginationButtons
              onPage={onPage}
              currentPage={page}
              changePage={onPageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};
