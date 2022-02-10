import React from 'react';
import Inicio from './components/Inicio'
import Base from './components/Base'

import {
  BrowserRouter,
  Routes ,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>

    <Routes>

        <Route exact path='inicio' element={<Inicio />} />
        <Route path='/' element={<Base />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
