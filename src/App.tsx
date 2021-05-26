import React from 'react';
import Router from './Router';
import { initializeStore } from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={initializeStore()}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
