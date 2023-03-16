import React, { useEffect, useState } from 'react';
import { Footer } from 'Components/Footer';
import { AboutProject } from 'Components/NavBar Footer/AboutProject';
import { Rights } from 'Components/NavBar Footer/Rights';
import { getAllPhones } from 'api/phones';
import { PageNotFound } from 'pages/PageNotFound';
import { PhonesPage } from 'pages/PhonesPage';
import { Route, Routes } from 'react-router';
import { Phone } from 'types/phoneTypes';
import './App.scss';
import { Header } from './Components/Header';

export function App() {
  const [phones, setPhones] = useState<Phone[]>([]);
  // const [isError, setError] = useState(false);

  const fetchAllPnones = async () => {
    try {
      const data = await getAllPhones();

      setPhones(data);
    } catch {
      // eslint-disable-next-line no-console
      console.log('bad req');

      // setError(true);
    }
  };

  useEffect(() => {
    fetchAllPnones();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/phones">
          <Route index element={<PhonesPage phones={phones} />} />
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
