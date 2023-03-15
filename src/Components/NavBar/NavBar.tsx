import React from 'react';
import { NavLinks } from '../NavLinks';
import './NavBar.scss';

export const NavBar: React.FC = () => (
  <div className="nav">
    <NavLinks />
  </div>
);
