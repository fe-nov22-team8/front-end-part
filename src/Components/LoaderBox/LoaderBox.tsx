import React from 'react';
import './LoaderBox.scss';

export const LoaderBox: React.FC = () => (
  <div className="loader">
    <svg viewBox="0 0 80 80">
      <rect x="8" y="8" width="64" height="64" />
    </svg>
  </div>
);
