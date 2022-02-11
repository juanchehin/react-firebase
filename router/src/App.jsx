import React from 'react';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';

import {
  BrowserRouter,
  Routes ,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Link to="/inicio">Usuarios</Link>

      <Routes>
          <Route exact path='usuarios' element={<Usuarios />} />
          <Route exact path='usuario/:id' element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
