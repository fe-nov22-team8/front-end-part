import React, { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from 'utils/searchHelper';
import './SearchBar.scss';
import debounce from 'lodash.debounce';

export const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const debouncedSetSearchParams = useCallback(
    debounce(setSearchParams, 1000),
    [],
  );

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);

    const normalizedValue = value.trim();

    const newSearchParams = getSearchWith(searchParams, {
      query: normalizedValue || null,
      page: null,
    });

    debouncedSetSearchParams(newSearchParams);
  };

  const handleClearInput = () => {
    setQuery('');
  };

  return (
    <div className="input-container">
      <p className="sortBy__title">Search something</p>
      <input
        className="input"
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
      />
      <span className="input-icon" />
      <button type="button" className="clear-input" onClick={handleClearInput}>
        <span className="clear-input-icon">x</span>
      </button>
    </div>
  );
};
