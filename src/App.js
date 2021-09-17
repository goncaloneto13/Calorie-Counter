import './App.css';
import Search from './componentes/Search/search';
import Result from './componentes/Result/result';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        Contador de calorias
      </div>
      <Search></Search>
      <Result></Result>
    </div>
  );
}

export default App;
