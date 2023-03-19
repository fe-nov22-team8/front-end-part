import React from 'react';
import './HomePage.scss';

export const HomePage: React.FC = () => (
  <div className="home-page">
    <div className="home-page__container">
      <section className="page__section page__section--1 welcome">
        <div className="grid grid--desktop">
          <div
            className="grid__item
            grid__item--desktop-1-18
            grid__item--tablet-1-9"
          >
            <h1 className="visually-hidden">Nice Gadgets store</h1>
            <h2 className="welcome__title">Welcome to Nice Gadgets store!</h2>
          </div>
        </div>
      </section>
    </div>
  </div>
);
