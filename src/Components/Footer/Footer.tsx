/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUp } from 'utils/getUp';
import './Footer.scss';
import { NavFooter } from 'Components/NavBar Footer';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="footer">
      <Link to="/" className="logo--footer" onClick={getUp} />
      <NavFooter />
      {isVisible ? (
        <div className="back-to-top" onClick={getUp} aria-label="scroll to top">
          <p className="back-to-top__p">Back to top</p>
          <span className="back-to-top__slider" />
        </div>
      ) : null}
    </div>
  );
};
