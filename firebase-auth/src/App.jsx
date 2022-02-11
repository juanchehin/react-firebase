import React from 'react';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';

import {
  BrowserRouter,
  Routes ,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='inicio' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
