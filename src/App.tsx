import React, { ReactElement } from 'react';
import styled from 'styled-components';
import useScroll from './hooks/useScroll';

import Header from './header/Header';

import Sections from './sections/Sections';
import castle from './asset/castle.gif';

const StyledImg = styled.div<{ animate: number }>`
  // width: 100%;
  // height: ${({ animate }) => 500 - animate}px;
  // background-image: url(https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375);
  // background-attachment: fixed;
  // background-size: 100% 40%;
  // height: 100%;
  // background-image: url(https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?crop=entropy&fit=crop&fm=jpg&h=650&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375);
  background: url(${castle});

  background-attachment: fixed;
  background-size: cover;
  height: 600px;

  @media screen and (max-width: 500px) {
    display: none;
  }
  // height: 1000px;
  // background-image: ;
  // margin-top: ${({ animate }) => (animate > 0 ? animate : 0)}px;
`;

const App = function App(): ReactElement {
  const { scrollY } = useScroll();

  return (
    <div className="App">
      <Header />
      <StyledImg animate={scrollY} />
      <Sections />
    </div>
  );
};

export default App;
