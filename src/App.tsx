import { PageNotFound } from 'pages/PageNotFound';
import { PhonesPage } from 'pages/PhonesPage';
import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import { Header } from './Components/Header';

export function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/phones">
          {/* <Route index element={<PhonesPage />} /> */}
        </Route>

        {/* for future */}
        {/*
        <Route path="/tablets" element={<TabletsPage />} />

        <Route path="/accessories" element={<AccessoriesPage />} />

        <Route path="/card" element={<Card />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="/about-project" element={<AboutProject />} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
