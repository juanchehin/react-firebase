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
    <Routes>

        <Route path='inicio' element={<Inicio />}>
        </Route>
        <Route path='/' element={<Base />}>
        </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
