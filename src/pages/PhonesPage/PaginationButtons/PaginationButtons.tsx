import React from 'react';
import './PaginationButtons.scss';

export const Pagination: React.FC<{
  currentPage: number;
  totalPage: number;
  onPageChange: (newPageNum: number) => void;
}> = ({ currentPage, totalPage, onPageChange }) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPage;

  const maxPageButtons = 5;
  const delta = Math.floor(maxPageButtons / 2);
  let start = Math.max(currentPage - delta, 1);
  let end = Math.min(currentPage + delta, totalPage);

  if (totalPage > maxPageButtons) {
    if (start === 1) {
      end = maxPageButtons;
    } else if (end === totalPage) {
      start = totalPage - maxPageButtons + 1;
    } else {
      start = currentPage - 2;
      end = currentPage + 2;
    }
  }

  const buttons = [];

  for (let i = start; i <= end; i++) {
    buttons.push(
      <button
        key={i}
        type="button"
        className={`buttons__button ${
          i === currentPage ? 'buttons__button--active' : ''
        }`}
        onClick={() => onPageChange(i)}
      >
        <div className="buttons__text">{i}</div>
      </button>,
    );
  }

  return (
    <div className="buttons">
      {showPrevious && (
        <button
          type="button"
          className="buttons__button buttons__button--arrow"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <div className="icon-arrow icon-arrow--left" />
        </button>
      )}
      {start > 1 && (
        <>
          <button
            key={1}
            type="button"
            className="buttons__button"
            onClick={() => onPageChange(1)}
          >
            <div className="buttons__text">{1}</div>
          </button>
          {start > 2 && (
            <span className="buttons__ellipsis">
              <span className="buttons__ellipsis--dot" />
              <span className="buttons__ellipsis--dot" />
              <span className="buttons__ellipsis--dot" />
            </span>
          )}
        </>
      )}
      {buttons}
      {end < totalPage && (
        <>
          {end < totalPage - 1 && (
            <span className="buttons__ellipsis">
              <span className="buttons__ellipsis--dot" />
              <span className="buttons__ellipsis--dot" />
              <span className="buttons__ellipsis--dot" />
            </span>
          )}
          <button
            key={totalPage}
            type="button"
            className="buttons__button"
            onClick={() => onPageChange(totalPage)}
          >
            <div className="buttons__text">{totalPage}</div>
          </button>
        </>
      )}
      {showNext && (
        <button
          type="button"
          className="buttons__button buttons__button--arrow"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <div className="icon-arrow" />
        </button>
      )}
    </div>
  );
};
