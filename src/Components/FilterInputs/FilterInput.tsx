/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './FilterInputs.scss';
import { useAppSelector } from '../../utils/hooks';

type Props = {
  changeOnPage: (newPage: number) => void;
  currentOnPage: number;
  sortBy: string;
  changeSortBy: (newSortBy: string) => void;
};

export const FilterInputs: React.FC<Props> = ({
  changeOnPage,
  currentOnPage,
  sortBy,
  changeSortBy,
}) => {
  const { allPhones } = useAppSelector((state) => state.phones);

  return (
    <div className="filterInputs">
      <h1 className="objectsTitle">Mobile phones</h1>

      <h5 className="objectsSubTitle">{allPhones?.length} models</h5>

      <div className="filter">
        <div className="filter__sortBy sortBy">
          <p className="sortBy__title">Sort by</p>

          <div className="sortBy__select select">
            <input
              className="select__selectopt"
              name="SortBy"
              type="radio"
              id="opt1"
              defaultChecked
            />

            <label htmlFor="opt1" className="select__option">
              {sortBy}
            </label>

            <input
              className="select__selectopt"
              name="SortBy"
              type="radio"
              id="opt2"
              onChange={() => changeSortBy('Newest')}
            />

            <label htmlFor="opt2" className="select__option">
              Newest
            </label>

            <input
              className="select__selectopt"
              name="SortBy"
              type="radio"
              id="opt3"
              onChange={() => changeSortBy('Cheapest')}
            />

            <label htmlFor="opt3" className="select__option">
              Cheapest
            </label>

            <input
              className="select__selectopt"
              name="SortBy"
              type="radio"
              id="opt4"
              onChange={() => changeSortBy('Expensive')}
            />

            <label htmlFor="opt4" className="select__option">
              Expensive
            </label>

            <input
              className="select__selectopt"
              name="SortBy"
              type="radio"
              id="opt5"
              onChange={() => changeSortBy('Alphabetic')}
            />

            <label htmlFor="opt5" className="select__option">
              Alphabetic
            </label>
          </div>
        </div>

        <div className="filter__itemsOnPage sortBy">
          <p className="sortBy__title">Items on page</p>

          <div className="sortBy__select sortBy__select-items select">
            <input
              className="select__selectopt"
              name="SortBy1"
              type="radio"
              id="opt11"
              defaultChecked
            />

            <label htmlFor="opt11" className="select__option">
              {currentOnPage}
            </label>

            <input
              className="select__selectopt"
              name="SortBy1"
              type="radio"
              id="opt22"
              onChange={() => changeOnPage(16)}
            />

            <label htmlFor="opt22" className="select__option">
              16
            </label>

            <input
              className="select__selectopt"
              name="SortBy1"
              type="radio"
              id="opt33"
              onChange={() => changeOnPage(12)}
            />

            <label htmlFor="opt33" className="select__option">
              12
            </label>

            <input
              className="select__selectopt"
              name="SortBy1"
              type="radio"
              id="opt44"
              onChange={() => changeOnPage(8)}
            />

            <label htmlFor="opt44" className="select__option">
              8
            </label>

            <input
              className="select__selectopt"
              name="SortBy1"
              type="radio"
              id="opt55"
              onChange={() => changeOnPage(6)}
            />

            <label htmlFor="opt55" className="select__option">
              6
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
