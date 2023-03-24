import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsPage.scss';

export const ContactsPage: React.FC = () => (
  <div className="page__section page__section--2 ContactsPage">
    <div className="history-block">
      <Link to="/" className="history-block__home" />
      <div className="history-block__arrow icon-arrow" />
      <Link className="history-block__title" to="/">
        Home
      </Link>
    </div>

    <h1 className="ContactsPage__title">Contacts</h1>

    <h3 className="ContactsPage__subtitle">FightClub Team</h3>

    <p className="ContactsPage__text">
      - Olha Yevstifieieva - olhayevstifieieva@gmail.com
      <br />
      - Serhii Tretiak - tretiak.srg@gmail.com
      <br />
      - Oleh Chermak - oleh.chermak@gmail.com
      <br />
      - Ihor Soloviov - igor.musson.55@gmail.com
      <br />- Artem Stepanskyy - ArtemStepanskyy@gmail.com (team-lead)
    </p>

    <h3 className="ContactsPage__subtitle">About project</h3>

    <p className="ContactsPage__text">
      Welcome to the Nice Gadgets.
      <br />
      Nice Gadgets is E-Commerce Web Application for buying phones, tablets etc.
      <br />
      The project was developed by a team of developers using the front-end
      React library.
      <br />
      As well as technologies such as React-Router, Redux(Redux-Toolkit),
      TypeScript, LocalStorage, Fetch, HTML5, CSS3(SASS) etc.
      <br />
      The backend part of the application is built with Node.JS.
      <br />
      The client part uses a component approach to development, as well as
      strong typing using TypeScript.
      <br />
      The server part is built with MVC architecture.
    </p>

    <h3 className="ContactsPage__subtitle">Application parts</h3>

    <p className="ContactsPage__text">
      <a
        style={{ textDecoration: 'none', color: 'pink' }}
        href="https://fe-nov22-team8.github.io/front-end-part/"
      >
        DEPLOYED APPLICATION
      </a>
      <br />
      <a
        style={{ textDecoration: 'none', color: 'pink' }}
        href="https://github.com/fe-nov22-team8/front-end-part"
      >
        Frontend Part
      </a>
      <br />
      <a
        style={{ textDecoration: 'none', color: 'pink' }}
        href="https://github.com/fe-nov22-team8/back-end-part"
      >
        Backend Part
      </a>
      <br />
      <a
        style={{ textDecoration: 'none', color: 'pink' }}
        href="https://github.com/fe-nov22-team8"
      >
        FightClub Team GitHub
      </a>
    </p>

    <h3 className="ContactsPage__subtitle">Technologies</h3>

    <p className="ContactsPage__text">
      <strong style={{ textDecoration: 'underline' }}>Client side:</strong>
      <ul>
        <li>React</li>
        <li>React-Router</li>
        <li>Redux</li>
        <li>Redux-Toolkit</li>
        <li>TypeScript</li>
        <li>HTML5CSS3(SASS)</li>
      </ul>
      <br />
      <strong style={{ textDecoration: 'underline' }}>Server side:</strong>
      <ul>
        <li>REST API</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>CORS</li>
        <li>PostgresSQL</li>
        <li>SequelizeORM</li>
      </ul>
    </p>
  </div>
);
