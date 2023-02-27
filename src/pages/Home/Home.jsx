import React from 'react';

// NAVEGAÇAO

// STYLE
import '../../pages/Home/Home.css';

import Header from '../../components/layout/Header/Header';
import SectionLifeStyle from '../../components/layout/SectionLifeStyle/SectionLifeStyle';
import ModelosSlide from '../../components/layout/ModelosSlide/ModelosSlide';
import SectionMolsheim from '../../components/layout/SectionMolsheim/SectionMolsheim';
import SectionUniversoBugatti from '../../components/layout/SectionUniversoBugatti/SectionUniversoBugatti';
import SectionFichaTec from '../../components/layout/SectionFichaTec/SectionFichaTec';
import Footer from '/src/components/layout/Footer/Footer';

// Cookie
import CookieService from '/src/client/Cookie/CookieService';


function Home () {
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
export default Home;



