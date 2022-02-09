import React from 'react';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <h1>Propiedades de los componentes</h1>
      
      <hr />
      <div className='row'>
        <div className='col'>
          <Cards
            imagen="https://via.placeholder.com/150"
            titulo="Titulo de card 1"
            texto="Texto de la card 1"
            />
        </div>

        <div className='col'>
          <Cards
            imagen="https://via.placeholder.com/150"
            titulo="Titulo de card 1"
            texto="Texto de la card 1"
            />
        </div>

        <div className='col'>
          <Cards
            imagen="https://via.placeholder.com/150"
            titulo="Titulo de card 1"
            texto="Texto de la card 1"
            />
        </div>
            
      </div>
    </div>
  );
}

export default App;
