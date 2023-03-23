/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from 'localStorageContex';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, NavLink } from 'react-router-dom';
import { NavLinks } from 'Components/NavLinks';
import { Menu } from 'Components/Menu';
import { NavBar } from '../NavBar';
import './Header.scss';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { cartItems, favoritesItems } = useContext(LocalStorageContext);

  const totalGoods = cartItems?.reduce((acc, item) => acc + item.count, 0);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div id="menu-hook">
        <TransitionGroup>
          {isOpen && (
            <CSSTransition timeout={600} classNames="mob-menu">
              <Menu>
                <div className="header">
                  <Link to="/" className="logo" />
                </div>

                <NavLinks isOpen={isOpen} closeMenu={closeMenu} />

                <div className="icons icons--menu">
                  <NavLink to="/favorites" className="nav__link--card">
                    <span
                      className="
                        icon
                        icon__heart
                        icon__heart--relative
                        icon__heart--menu
                      "
                      onClick={closeMenu}
                    >
                      {favoritesItems?.length !== 0 && (
                        <div
                          className="
                          badge-counter
                          badge-counter--heart
                          badge-counter--heart-menu
                        "
                        >
                          {favoritesItems?.length}
                        </div>
                      )}
                    </span>
                  </NavLink>

                  <NavLink
                    to="/cart"
                    className="nav__link--card nav__link--card-menu"
                  >
                    <span
                      className="
                        icon
                        icon__card
                        icon__card--relative
                        icon__card--menu
                      "
                      onClick={closeMenu}
                    >
                      {totalGoods !== 0 && (
                        <div
                          className="
                            badge-counter
                            badge-counter--card
                            badge-counter--card-menu
                          "
                        >
                          {totalGoods}
                        </div>
                      )}
                    </span>
                  </NavLink>
                </div>
              </Menu>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>

      <div className="header">
        <Link to="/" className="logo" />

        <NavBar />

        <div className="icons">
          <NavLink to="/favorites" className="nav__link--card">
            <span className="icon icon__heart icon__heart--relative">
              {favoritesItems?.length !== 0 && (
                <div className="badge-counter badge-counter--heart">
                  {favoritesItems?.length}
                </div>
              )}
            </span>
          </NavLink>

          <NavLink to="/cart" className="nav__link--card">
            <div className="icon icon__card icon__card--relative">
              {totalGoods !== 0 && (
                <div className="badge-counter badge-counter--card">
                  {totalGoods}
                </div>
              )}
            </div>
          </NavLink>
          <span className="icon icon__menu" onClick={openMenu} />
        </div>
      </div>
    </>
  );
};
