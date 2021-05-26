import { Provider } from 'react-redux';
import { initializeStore } from './store';
import Router from './Router';
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
