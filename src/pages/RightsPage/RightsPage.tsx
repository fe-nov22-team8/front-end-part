import React from 'react';
import { Link } from 'react-router-dom';
import './RightsPage.scss';

export const RightsPage: React.FC = () => (
  <div className="page__section page__section--2 ContactsPage">
    <div className="history-block">
      <Link to="/" className="history-block__home" />
      <div className="history-block__arrow icon-arrow" />
      <Link className="history-block__title" to="/">
        Home
      </Link>
    </div>

    <h1 className="Rights__title">Rights</h1>

    <h3 className="Rights__subtitle">Welcome to Fight Club</h3>

    <p className="Rights__text">
      The first rule of Fight Club is: you do not talk about Fight Club. The
      second rule of Fight Club is: you DO NOT talk about Fight Club!
      <br />© Tyler Durden
    </p>
  </div>
);
