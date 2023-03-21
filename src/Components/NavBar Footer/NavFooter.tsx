import React from 'react';
import { Link } from 'react-router-dom';
import './NavFooter.scss';

export const NavFooter: React.FC = () => (
  <div className="nav nav--footer">
    <div className="nav__bar nav__bar--footer">
      <a
        href="https://github.com/fe-nov22-team8"
        target="_blank"
        className="nav__link nav__link--footer"
        rel="noreferrer"
      >
        Github
      </a>
      <Link to="/contactpage" className="nav__link nav__link--footer">
        Contacts
      </Link>
      <Link to="/rightspage" className="nav__link nav__link--footer">
        Rights
      </Link>
    </div>
  </div>
);
