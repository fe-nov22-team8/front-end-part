/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from 'localStorageContex';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NavLinks } from 'Components/NavLinks';
import { client } from 'utils/fetch';
import { Menu } from 'Components/Menu';
import { NavBar } from '../NavBar';
import './Header.scss';
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from '../../utils/hooks';
import { setFavorites } from '../../features/favoritesSlice';
import { setCard } from '../../features/cardSlice';
import { setUser } from '../../features/userSlice';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { currentFavorites } = useAppSelector((state) => state.favorites);
  const { user } = useAppSelector((state) => state.user);
  const [storedFavorites] = useLocalStorage('favorites');
  const [storedCard] = useLocalStorage('card');

  const { cartItems } = useContext(LocalStorageContext);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/');
  };

  const [userStores, setUserStores] = useLocalStorage('user');

  const logoutHandler = async () => {
    try {
      await client.get('/users/logout');
      routeChange();
      dispatch(setUser(null));
      setUserStores({});
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  const totalGoods = cartItems?.reduce((acc, item) => acc + item.count, 0);

  useEffect(() => {
    const userForState = 'id' in userStores ? userStores : null;

    dispatch(setFavorites(storedFavorites));
    dispatch(setCard(storedCard));
    dispatch(setUser(userForState));
  }, []);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="menu-hook">
        <TransitionGroup>
          {isOpen && (
            <CSSTransition timeout={600} classNames="mob-menu">
              <Menu>
                <div className="header">
                  <Link to="/" className="logo" />

                  <div className="icons">
                    {user ? (
                      <>
                        <NavLink to="/user" className="nav__link--card">
                          <span
                            className="
                              icon
                              icon__user
                              icon__user--menu
                              "
                            onClick={closeMenu}
                          />
                        </NavLink>

                        <div
                          className="nav__link--card"
                          onClick={logoutHandler}
                        >
                          <span
                            className="
                              icon
                              icon__log-out
                              icon__log-out--menu
                              "
                            onClick={closeMenu}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <NavLink to="/sing-up" className="nav__link--card">
                          <span
                            className="
                              icon
                              icon__user-plus
                              icon__user-plus--menu
                              "
                            onClick={closeMenu}
                          />
                        </NavLink>

                        <NavLink to="/login" className="nav__link--card">
                          <span
                            className="
                              icon
                              icon__log-in
                              icon__log-in--menu
                              "
                            onClick={closeMenu}
                          />
                        </NavLink>
                      </>
                    )}

                    <span className="icon icon__close" onClick={closeMenu} />
                  </div>
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
                      <div
                        className="
                        badge-counter
                        badge-counter--heart
                        badge-counter--heart-menu
                      "
                      >
                        {currentFavorites.length}
                      </div>
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
                      <div
                        className="
                        badge-counter
                        badge-counter--card
                        badge-counter--card-menu
                      "
                      >
                        {totalGoods}
                      </div>
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
              <div className="badge-counter badge-counter--heart">
                {currentFavorites.length}
              </div>
            </span>
          </NavLink>

          <NavLink to="/cart" className="nav__link--card">
            <div className="icon icon__card icon__card--relative">
              <div className="badge-counter badge-counter--card">
                {totalGoods}
              </div>
            </div>
          </NavLink>

          {user ? (
            <>
              <NavLink to="/user" className="nav__link--card">
                <span className="icon icon__user" />
              </NavLink>

              <div className="nav__link--card" onClick={logoutHandler}>
                <span className="icon icon__log-out" />
              </div>
            </>
          ) : (
            <>
              {/* <NavLink to="/sing-up" className="nav__link--card">
                <span className="icon icon__user-plus" />
              </NavLink> */}

              {/* <NavLink to="/login" className="nav__link--card">
                <span className="icon icon__log-in" />
              </NavLink> */}
            </>
          )}

          <span className="icon icon__menu" onClick={openMenu} />
        </div>
      </div>
    </>
  );
};
