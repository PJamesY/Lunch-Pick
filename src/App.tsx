import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import useScroll from './hooks/useScroll';
import Header from './header/Header';
import Sections from './sections/Sections';
import ThrottleComponent from './pages/ThrottleComponent';

const App = function App(): ReactElement {
  const { scrollY } = useScroll();

  return (
    <div className="App">
      <Routes>
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/throttle" element={<ThrottleComponent />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Sections />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
