// NAVEGAÇAO
import Navbar from './components/layout/Navbar/Navbar';

// Router
import {BrowserRouter, Router, Routes,Route } from 'react-router-dom'


// STYLE
import './App.css';


// PAGES
import Home from './pages/Home/Home';
import LifeStyle from './pages/LifeStyle/LifeStyle';
import Modelos from './pages/Modelos/Modelos';
import Molsheim from './pages/Molsheim/Molsheim';
import Champagne from './pages/BugattiUniverso/Champagne/Champagne';
import Relogio from './pages/BugattiUniverso/Relogio/Relogio';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade/PoliticaPrivacidade';


function App () {
return (
  <div id="header" className="App">
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Modelos" exact element={<Modelos />} />
          <Route path="/LifeStyle" exact element={<LifeStyle />} />
          <Route path="/Moshelim" exact element={<Molsheim />} />
          <Route path="/Champagne" exact element={<Champagne />} />
          <Route path="/Relogio" exact element={<Relogio />} />
          <Route path="/PoliticaPrivacidade" exact element={<PoliticaPrivacidade />} />
        </Routes>
        </BrowserRouter>
    </div>
);

}
export default App;



