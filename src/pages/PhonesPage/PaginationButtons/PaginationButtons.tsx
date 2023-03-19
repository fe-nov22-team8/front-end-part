import React from 'react';
import './PaginationButtons.scss';

export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (newPageNum: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div className="buttons">
      {showPrevious && (
        <button
          type="button"
          className="buttons__button buttons__button--arrow"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <div className="icon-arrow icon-arrow--left" />
        </button>
      )}
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          type="button"
          className={`buttons__button ${
            i + 1 === currentPage ? 'buttons__button--active' : ''
          }`}
          onClick={() => handlePageChange(i + 1)}
        >
          <div className="buttons__text">{i + 1}</div>
        </button>
      ))}
      {showNext && (
        <button
          type="button"
          className="buttons__button buttons__button--arrow"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <div className="icon-arrow" />
        </button>
      )}
    </div>
  );
};
