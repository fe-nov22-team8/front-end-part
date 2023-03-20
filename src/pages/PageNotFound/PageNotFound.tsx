import React from 'react';
import Snake from 'snake-game-react';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => (
  <div className="not-found">
    <h1 className="not-found__title">404</h1>
    <h2 className="not-found__subtitle">Page Not Found</h2>
    <h3 className="not-found__subsubtitle"> but you can play snake</h3>
    <Snake color1="#1d355e" color2="#905bff" backgroundColor="#161827" />
  </div>
);
