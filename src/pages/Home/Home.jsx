import React from 'react';

// NAVEGAÇAO

// STYLE
import '/src/App.css';
import '/src/pages/Home/Home.css';

import Header from '/src/components/layout/Header/Header';
import SectionLifeStyle from '/src/components/layout/SectionLifeStyle/SectionLifeStyle';
import ModelosSlide from '/src/components/layout/ModelosSlide/ModelosSlide';
import SectionMolsheim from '/src/components/layout/SectionMolsheim/SectionMolsheim';
import SectionUniversoBugatti from '/src/components/layout/SectionUniversoBugatti/SectionUniversoBugatti';
import SectionFichaTec from '/src/components/layout/SectionFichaTec/SectionFichaTec';
import Footer from '/src/components/layout/Footer/Footer';

// Cookie
import CookieService from '/src/client/Cookie/CookieService';

// import { hotjar } from 'react-hotjar';

// hotjar.identify('USER_ID', { userProperty: '3357688' });

function App () {
return (
  <>
     <Header/>
     <SectionLifeStyle/>
     <ModelosSlide/>
     <SectionMolsheim/>
     <SectionUniversoBugatti/>
     <SectionFichaTec/>
     <CookieService/>
     <Footer/>
    </>
);

}
export default App;



