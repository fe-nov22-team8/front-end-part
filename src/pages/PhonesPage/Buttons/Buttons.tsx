import React from 'react';

export const Buttons: React.FC = () => (
  <div className="buttons">
    <button type="button" className="buttons__button buttons__button--arrow">
      <div className="icon-arrow icon-arrow--left" />
    </button>
    <button type="button" className="buttons__button">
      <div className="buttons__text">1</div>
    </button>
    <button type="button" className="buttons__button">
      <div className="buttons__text">2</div>
    </button>
    <button type="button" className="buttons__button">
      <div className="buttons__text">3</div>
    </button>
    <button type="button" className="buttons__button">
      <div className="buttons__text">4</div>
    </button>
    <button type="button" className="buttons__button buttons__button--arrow">
      <div className="icon-arrow" />
    </button>
  </div>
);
