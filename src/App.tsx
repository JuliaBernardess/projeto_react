





 /*function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
    //  <Home  title="Componente Home"
    //         description="Este é um componente Home que recebe props."/>
    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App;*/



/*function App() {
 
  return (
    <>
      <Home/>
    </>
  );
}

export default App;*/

import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;