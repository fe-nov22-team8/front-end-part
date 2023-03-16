import { Footer } from 'Components/Footer';
import { AboutProject } from 'Components/NavBar Footer/AboutProject';
import { Rights } from 'Components/NavBar Footer/Rights';
import { PageNotFound } from 'pages/PageNotFound';
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

        <Route path="/favorites" element={<FavoritesPage />} /> */}
        <Route path="/about-project" element={<AboutProject />} />

        <Route path="/rights" element={<Rights />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
