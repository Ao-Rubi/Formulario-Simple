import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App container px-0">
      <h1 className='text-center bg-dark text-light'>Llene el formulario</h1>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
