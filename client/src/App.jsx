import React from 'react';
import Main from './components/Main/main';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header"></div>
        <div className="app__body">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
