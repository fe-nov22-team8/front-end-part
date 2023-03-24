import React from 'react';
import { LocalStorageProvider } from 'Components/Context';

import { Footer } from 'Components/Footer';
import { Cart } from 'Components/Cart';
import { PageNotFound } from 'pages/PageNotFound';
import { PhonesPage } from 'pages/PhonesPage';
import { Route, Routes } from 'react-router';
import './App.scss';
import { HomePage } from 'pages/HomePage';
import { TabletPage } from 'pages/TabletPage';
import { FavoritesPage } from 'pages/FavoritesPage';
import { OnePhonePage } from 'pages/OnePhonePage';
import { ContactsPage } from 'pages/ContactsPage';
import { RightsPage } from 'pages/RightsPage/RightsPage';
import { AccessoriesPage } from 'pages/AccessoriesPage';
import { HeadphonesPage } from 'Components/HeadphonesPage';
import { ScrollTop } from 'Components/SctrollTop/ScrollTop';
import { Header } from './Components/Header';

export function App() {
  return (
    <LocalStorageProvider>
      <div className="App">
        <ScrollTop />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneSlug" element={<OnePhonePage />} />
          </Route>

          <Route path="/tablets">
            <Route index element={<TabletPage />} />
            <Route path=":phoneSlug" element={<OnePhonePage />} />
          </Route>

          <Route path="/accessories">
            <Route index element={<AccessoriesPage />} />
            <Route path=":phoneSlug" element={<HeadphonesPage />} />
          </Route>

          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactpage" element={<ContactsPage />} />

          <Route path="/rightspage" element={<RightsPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </div>
    </LocalStorageProvider>
  );
}
