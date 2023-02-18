import '/src/pages/BugattiUniverso/Champagne/Champagne.css';
// ESTILIZAÇÃO TEXTOS
import '/src/components/layout/StyleTextos.css';

// Imagem Capa
import ImagemCapa from "/src/assets/bugatti/BugattiUniverse/Champagne/capa_champ.jpg";

// Imagens post champage
import Champagne from "/src/assets/bugatti/BugattiUniverse/Champagne/post1.png";
import Champagne2 from "/src/assets/bugatti/BugattiUniverse/Champagne/champagne1.jpg";
import LogoChamp from "/src/assets/bugatti/BugattiUniverse/Champagne/logochamp.png";
import CarbonChamp from "/src/assets/bugatti/BugattiUniverse/Champagne/carbonchamp.jpg";
import LogoBugatti from "/src/assets/bugatti/BugattiUniverse/Champagne/logobugatti.png";

import Carbon3B01 from "/src/assets/bugatti/BugattiUniverse/Champagne/3B01.jpg";
import Carbon3B02 from "/src/assets/bugatti/BugattiUniverse/Champagne/carbon2.jpg";


// Components
import Footer from '/src/components/layout/Footer/Footer';


function BugattiUniverso() {
  return (
    <>
      <section id="contact-section" className=" welcome-section-2">
        <div className=" text-center col col-lg-4 text " id='text'>
          <h1 className='h2-champagne'>Champagne Carbon
            Bugatti</h1>
        </div>
        <div className='bg one'>
          <img src={ImagemCapa} id='bgvid' />
        </div>
      </section>
      <section className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-6">
          <header className='mt-5 mb-5 text-center'>
              <h2 className='d-inline font-mindset' >
                <span>Champagne Carbon </span>
              </h2>
              <p className='text-center'>
                <span className='font-2-style'>Modernity</span>
                <span className='font-2-style '>Tradition</span>
              </p>
            </header>
          </div>
          <div className="col-md-6 media-item">
            <img src={Champagne} className="img-fluid img-universe" alt="Imagem responsiva" />
          </div>
        </div>
      </section>
      <section className='parallax-universe'>
      </section>
      {/* ------------------- */}
      <section className="container-xxl zero-padding">
        <div className="row">
          <div className="col media-item">
          <img src={Champagne2} align="left" className="img-fluid img-universe2 mt-ch" alt="Imagem responsiva" />
            <header className='mt-champ mb-5 col' id='mt-champ'>
              <h2 className='font-mindset text-center' >
                <span>La bouteille sur mesure </span>
              </h2>
              <div className="row">
                <p className='paris-1 text-center'>
                  Tradição na elaboração com vinificação em
                  barricas e fermentações bloqueadas comandadas
                  pelo enólogo Alexandre Méa, Modernidade através
                  desta garrafa vestida de fibra de carbono.
                </p>
              </div>
            </header>
          </div>
        </div>
      </section>
      

{/* ---------3B.01 CHAMPAGNE -------------------- */}
<section className="container-xxl zero-padding">
        <div className="row">
          <div className="col media-item">
          <header className='mt-5 mb-5 col ' id='no-mb-respon'>
              <h2 className='text-center font-mindset' id="h2-respon">
                <span>ƎB.01</span>
              </h2>
              <div className="row">
                <p className='paris-1'>
                Para comemorar o 110º aniversário da Bugatti, a CARBON criou um 
                champanhe com 90% de Chardonnay e 10% de Pinot Noir.
                O carbono torna-se um símbolo. Esse elemento, que, por meio da datação 
                por carbono, permite determinar a origem das coisas, também é usado na 
                construção do Bugatti Veyron e envolve as garrafas de Champagne Carbon.
                É uma fusão de tradição e modernidade, excelência, alto padrão e tecnologia.
                </p>
              </div>
            </header>
            <img src={Carbon3B01} className="img-fluid img-universe2" id='no-mb-respon' alt="Imagem responsiva" />
          </div>
        </div>
      </section>
{/* -------------------------- */}

{/* ---------3B.02 CHAMPAGNE -------------------- */}
<section className="container-xxl zero-padding">
        <div className="row">
          <div className="col media-item"  >
            <img src={Carbon3B02} className="img-fluid img-universe2" id='rp-champ' alt="Imagem responsiva" />

            <header className='mt-5 mb-5 col' id='mt-champ'>
              <h2 className=' font-mindset text-center'  >
                <span>ƎB.02</span>
              </h2>
              <div className="row">
                <p className='paris-1' id="txt-mt">
                  ƎB.03, é composto de fibra de carbono azul e preto em seu exterior.
                  Com um design em 'X'do Bolide, que representa a frente e a traseira
                  do carro, sendo marcado nós lados da garrafa ƎB.03.<br></br>
                  O conteúdo da garrafa é o resultado de um inverno frio e úmido em 2013
                  seguido por uma primavera fresca e uma vindima tardia.
                  Esta safra de 2013 traz consigo aromas iniciais de frutas cítricas, seguidos de aromas de flores primaveris.
                  Em seguida, uma intensidade crescente em direção a frutas cítricas amarelas, notas tostadas e ervas aromáticas.
                  Na boca proporciona uma intensidade inicial, seguida de uma textura mais cremosa e aveludada. O final revela notas de acidez.
                </p>
              </div>
            </header>
          </div>
        </div>
      </section>

{/* ------------------------------------------------ */}
      {/* ------------ 3B.03 CHAMPAGNE -------------- */}
      <section className="container-xxl zero-padding">
        <div className="row">
          <div className="col media-item">
            <header className='mt-5 mb-5 col'>
              <h2 className='text-center font-mindset ' >
                <span>ƎB.03</span>
              </h2>
              <div className="row">
                <p className='paris-1'>
                  ƎB.03, é composto de fibra de carbono azul e preto em seu exterior.
                  Com um design em 'X'do Bolide, que representa a frente e a traseira
                  do carro, sendo marcado nós lados da garrafa ƎB.03.<br></br>
                  O conteúdo da garrafa é o resultado de um inverno frio e úmido em 2013
                  seguido por uma primavera fresca e uma vindima tardia.
                  Esta safra de 2013 traz consigo aromas iniciais de frutas cítricas, seguidos de aromas de flores primaveris.
                  Em seguida, uma intensidade crescente em direção a frutas cítricas amarelas, notas tostadas e ervas aromáticas.
                  Na boca proporciona uma intensidade inicial, seguida de uma textura mais cremosa e aveludada. O final revela notas de acidez.
                </p>
              </div>
            </header>
            <img src={CarbonChamp} className="img-fluid img-universe2" alt="Imagem responsiva" />

          </div>
        </div>
      </section>
      {/* ---------- */}
      <section className="container-fluid color-item">
        <div className="container p-2">
          <div className="row">
            <div className="col media-item">
              <header className='mt-5 mb-5 col'>
                <h2 className='d-inline font-mindset ' >
                  <span>La bouteille sur mesure </span>
                </h2>
                <img src={LogoChamp} className="img-fluid logo-champ-0 rounded mx-auto d-block" alt="Imagem responsiva" />

                <div className="col">
                  <p className='text-item text-justify paris-1'>
                    Champagne Carbon é antes de tudo uma história
                    apaixonante entre a vinha, nossos terroirs e o
                    desejo de sacudir os códigos nos quais cresci.
                    Carbon representa meu primeiro projeto empreendedor.
                    Ambição e inovação se tornaram minhas duas
                    palavras-chave. Ator de uma certa evolução em
                    Champagne, quis empreender em uma nova perspectiva.
                    Pensando grande, misturei a tradição do champanhe com
                    uma matéria seca completamente distinta. Hoje, os
                    diferentes cuvées marcam os espíritos e destacam a
                    nova era do século XXI em Champagne. As minhas memórias
                    de infância são precisas, tradição, saber fazer e vontade
                    de ir sempre mais longe. Este é o Carbono.
                  </p>
                </div>
                <h3 className='text-center h3-name mt-4'>Alexandre Mea</h3>
              </header>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX 2 */}
      <section className='parallax-universe-2'>
        <div className='container'>
          <h1 className='h1-name-carbon text-center' >CARBON</h1>
          <img src="/src/assets/bugatti/BugattiUniverse/carbon.PNG" className='universe' alt="" />
        </div>
      </section>

      {/* -------------- */}

      <section className="container-fluid color-item">
        <div className="container p-2">
          <div className="row">
            <div className="col media-item">
              <header className='mt-5 mb-5 col'>
                <div className="container">
                  <div className="row align-items-center ">
                    <div className="col-md-6  align-items-center ">
                      <img src={LogoChamp} className="img-fluid logo-champ rounded mx-auto d-block" alt="Imagem responsiva" />
                    </div>
                    <div className="col-md-6 align-items-center">
                      <img src={LogoBugatti} className="img-fluid logo-bugatti rounded mx-auto d-block" alt="Imagem responsiva" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <p className='text-item text-center paris-1'>
                    Bugatti e Champagne Carbon.  “Na encruzilhada da
                    tradição e da modernidade, da excelência e da tecnologia, a
                    BUGATTI nunca transige. Sentimos o mesmo em relação ao nosso champanhe”.
                  </p>
                </div>
                <h3 className='text-center h3-name mt-4'>Alexandre Mea</h3>
              </header>
            </div>
          </div>
        </div>
      </section>
      {/* PARALLAX 3 */}
      <section className='parallax-universe-3'>
        <div className='container'>
          <h1 className='h1-name-universe text-center' >Leveza</h1>
          <img src="/src/assets/bugatti/BugattiUniverse/carbon.PNG" className='universe' alt="" />
        </div>
      </section>
      <Footer />
    </>

  );
}

export default BugattiUniverso;