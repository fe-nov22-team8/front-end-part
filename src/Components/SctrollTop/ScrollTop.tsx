import React, { useEffect } from 'react';

export const ScrollTop: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
};
