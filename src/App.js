import './App.css';
import Search from './componentes/Search/search';
import Result from './componentes/Result/result';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div>
        <div className='Title'>
          Contador de calorias
        </div>
        <Search></Search>
        <Result></Result>
      </div>
    </div>
  );
}

export default App;
