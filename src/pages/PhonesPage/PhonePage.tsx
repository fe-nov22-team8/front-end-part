/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Phone } from 'types/phoneTypes';
import { getAllPhones } from 'api/phones';
import { ProductCard } from 'Components/ProductCard';
import { LoaderBox } from 'Components/LoaderBox';
import './PhonePage.scss';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page] = useState<number>(1);
  const [itemsPerPage, updateItemsPerPage] = useState<number>(16);
  // const { allPhones } = useAppSelector((state) => state.phones);

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateItemsPerPage(+event.target.value);
  };

  const fetchAllPhones = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const data = await getAllPhones(page, itemsPerPage);
      setPhones(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllPhones();
  }, [itemsPerPage]);

  return (
    <section className="phones-page">
      <div className="phones-page__container">
        <div className="phones-page__header phones-page__grid">
          <div className="filterInputs">
            <h1 className="objectsTitle">Mobile phones</h1>
            {/* <h5 className="objectsSubTitle">{allPhones?.length} models</h5> */}
            <div className="filter">
              <div className="filter__sortBy sortBy">
                <p className="sortBy__title">Sort by</p>

                <select
                  className="sortBy__select select"
                  name="sort-by"
                  id="sort-select"
                >
                  <option
                    className="select__selectopt"
                    value="newest"
                    defaultChecked
                  >
                    Newest
                  </option>
                  <option className="select__selectopt" value="alph">
                    Alphabetic
                  </option>
                  <option className="select__selectopt" value="cheapest">
                    Cheapest
                  </option>
                </select>
              </div>

              <div className="filter__itemsOnPage sortBy">
                <p className="sortBy__title">Items on page</p>
                <select
                  onChange={handleItemsPerPage}
                  value={itemsPerPage}
                  className="sortBy__select sortBy__select-items select"
                  name="amount-select"
                  id="amount-select"
                >
                  <option className="select__selectopt" value="4">
                    4
                  </option>
                  <option className="sselect__selectoptn" value="8">
                    8
                  </option>
                  <option className="select__selectopt" selected value="16">
                    16
                  </option>
                  <option className="select__selectopt" value="all">
                    all
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="phones-page__all-phones all-phones">
          {!!phones.length &&
            !isLoading &&
            phones.map((phone) => <ProductCard phone={phone} key={phone.id} />)}

          {isLoading && (
            <div style={{ paddingTop: '150px' }}>
              <LoaderBox />
            </div>
          )}

          {!phones.length && isError && (
            <h2 className="heading-2">Something went wrong</h2>
          )}

          {!phones.length && !isError && !isLoading && (
            <h2 className="heading-2">There are no phones yet</h2>
          )}
        </div>
      </div>
    </section>
  );
};
