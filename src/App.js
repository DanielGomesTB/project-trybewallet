import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <BrowserRouter>
        <Route
          path="/"
          exact
          component={ Login }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
