import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

type Props = {
  firstRoute: string;
  secondRoute?: string;
};

export const HistoryBlock: React.FC<Props> = ({ firstRoute, secondRoute }) => {
  let slicedSecondRoute = secondRoute;

  if (slicedSecondRoute && slicedSecondRoute.length > 20) {
    slicedSecondRoute = `${slicedSecondRoute.slice(0, 20)}...`;
  }

  return (
    <div className="history-block">
      <Link to="/" className="history-block__home " />
      <div className="history-block__arrow icon-arrow" />
      <Link
        to={`/${firstRoute.toLowerCase()}`}
        className={classnames('history-block__title', {
          'history-block__title--white': secondRoute,
        })}
      >
        {firstRoute}
      </Link>
      {secondRoute && (
        <>
          <div className="history-block__arrow icon-arrow" />
          <Link
            to={`/${firstRoute.toLowerCase()}/${secondRoute
              .toLowerCase()
              .split(' ')
              .join('-')}`}
            className="history-block__title history-block__title--desktop"
          >
            {secondRoute}
          </Link>
          <Link
            to={`/${firstRoute.toLowerCase()}/${secondRoute
              .toLowerCase()
              .split(' ')
              .join('-')}`}
            className="history-block__title history-block__title--mobile"
          >
            {slicedSecondRoute}
          </Link>
        </>
      )}
    </div>
  );
};
