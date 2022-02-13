import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import useScroll from './hooks/useScroll';
import Header from './header/Header';
import Sections from './sections/Sections';
import ThrottleComponent from './pages/ThrottleComponent';

const StyledImg = styled.div<{ animate: number }>`
  background-image: url('https://images.unsplash.com/photo-1449452198679-05c7fd30f416?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375');
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100vw;
  height: 600px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

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
