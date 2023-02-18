// NAVEGAÇAO
import Navbar from '/src/components/layout/Navbar/Navbar';

// Router
import {BrowserRouter, Router, Routes,Route } from 'react-router-dom'


// STYLE
import '/src/App.css';


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
          <Route path="/Home" element={<Home />} />
          <Route path="/Modelos" element={<Modelos />} />
          <Route path="/LifeStyle" element={<LifeStyle />} />
          <Route path="/Moshelim" element={<Molsheim />} />
          <Route path="/Champagne" element={<Champagne />} />
          <Route path="/Relogio" element={<Relogio />} />
          <Route path="/PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
        </Routes>
        </BrowserRouter>
    </div>
);

}
export default App;



