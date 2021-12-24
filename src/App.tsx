import React, { ReactElement } from 'react';
import Header from './header/Header';
import Sections from './sections/Sections';

const App = function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Sections />
    </div>
  );
};

export default App;
