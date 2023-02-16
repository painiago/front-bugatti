// NAVEGAÇAO
import Navbar from '/src/components/layout/Navbar/Navbar';

// Router
import {BrowserRouter, Router, Routes,Route } from 'react-router-dom'


// STYLE
import '/src/App.css';


// PAGES
import Home from '/src/pages/Home/Home';
import LifeStyle from '/src/pages/LifeStyle/LifeStyle.jsx';
import Modelos from '/src/pages/Modelos/Modelos';
import Molsheim from '/src/pages/Molsheim/Molsheim';
import Champagne from '/src/pages/BugattiUniverso/Champagne/Champagne';
import Relogio from '/src/pages/BugattiUniverso/Relogio/Relogio';
import PoliticaPrivacidade from '/src/pages/PoliticaPrivacidade/PoliticaPrivacidade';


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



