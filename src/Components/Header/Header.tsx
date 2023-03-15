import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <div className="header">
    <Link to="/" className="logo" />
  </div>
);
