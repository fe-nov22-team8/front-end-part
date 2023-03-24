import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith, SearchParams } from '../../utils/searchHelper';

type Props = {
  params: SearchParams;
  text: string;
};

export const SearchLink: React.FC<Props> = ({ text, params, ...props }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={{
        search: getSearchWith(searchParams, params),
      }}
      {...props}
    >
      {text}
    </Link>
  );
};
