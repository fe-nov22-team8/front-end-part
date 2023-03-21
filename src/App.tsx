import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'utils/customHook';
import { Footer } from 'Components/Footer';
import { AboutProject } from 'Components/NavBar Footer/AboutProject';
import { Rights } from 'Components/NavBar Footer/Rights';
import { Cart } from 'Components/Cart';
import { PageNotFound } from 'pages/PageNotFound';
import { PhonesPage } from 'pages/PhonesPage';
import { Route, Routes } from 'react-router';
import { Item } from 'types/Item';
import './App.scss';
import { HomePage } from 'pages/HomePage';
import { TabletPage } from 'pages/TabletPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { OnePhonePage } from 'Components/OnePhonePage';
import { Header } from './Components/Header';

export function App() {
  const [cartItems, setCartItems] = useLocalStorage<Item[]>('cart', []);

  const changeCartItems = (
    item: Item,
    id: string,
    isAdded: boolean,
    items: Item[],
  ) => {
    if (isAdded) {
      const updatedCartItems = items.filter((i) => i.id !== id);

      setCartItems(updatedCartItems);

      return;
    }
    setCartItems((prevCartItems: any) => [...prevCartItems, item]);
  };

  console.log(cartItems);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones">
          <Route index element={<PhonesPage />} />
          <Route path=":phoneSlug" element={<OnePhonePage />} />
        </Route>

        <Route path="/tablets" element={<TabletPage />} />

        {/* <Route path="/accessories" element={<AccessoriesPage />} /> */}

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-project" element={<AboutProject />} />

        <Route path="/rights" element={<Rights />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
