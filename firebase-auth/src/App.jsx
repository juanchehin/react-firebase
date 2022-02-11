import React from 'react';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';
import Menu from './components/Menu';

import {
  BrowserRouter,
  Routes ,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
          <Route path='inicio' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
