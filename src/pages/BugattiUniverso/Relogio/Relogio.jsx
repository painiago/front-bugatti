// CSS
import '/src/pages/BugattiUniverso/Relogio/Relogio.css';
import Footer from '/src/components/layout/Footer/Footer';

// CSS FONTE TEXTOS
import '/src/components/layout/StyleTextos.css'

//CAPA 

import ImgRelogio from "/src/assets/bugatti/BugattiUniverse/Relogio/jacob.jpg";
// LOGO

import LogoRelogio from "/src/assets/bugatti/BugattiUniverse/Relogio/jacobforbugatti.jpg";


function Relogio() {
  return (
    <div>
      <section id="contact-section" className=" welcome-section-2">
        <div className="col-3 text-center mt-5 text-relogio champagne-mq" id='text'>
          <h1>“Bugatti Chiron Tourbillon Collection by Jacob & Co.”</h1>
        </div>
        <div className='bg one'>
          <img src={ImgRelogio} id='' />
        </div>
      </section>
      {/* LOGO JACOB FOR BUGATTI */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <img src={LogoRelogio} className="img-fluid img-relogio rounded mx-auto d-block" alt="" />
          </div>
        </div>
      </div>
      
      {/* ------------------- */}
      <div className='bg-relogio'>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-5 ">
              <p className='paragrafos-p  mt-5'>Em colaboração com Jacob & Co. Bugatti
                embarca em uma nova era: a parceria entre o
                fabricante francês de hiperesportivos Bugatti
                e o fornecedor líder de relógios altamente
                complexos Jacob & Co. sempre valorizaram o design
                inovador, mas que expandiram com paixão os limites
                do que é mecanicamente possível. Agora, os dois
                pioneiros criarão juntos uma gama de produtos
                exclusivos da marca Bugatti. Jacob Arabov, fundador
                da Jacob & Co., compara a sensação provocada por
                seus relógios sofisticados com a mesma descarga de
                adrenalina que é desencadeada pela simples visão do
                Bugatti Chiron: uma sensação de energia, movimento
                e força quase impossível de conter. </p>
            </div>
            <div className="col">
              <img src="/src/assets/bugatti/BugattiUniverse/Relogio/relogiobug.jpg" className=' img-relogio-1 img-fluid rounded mx-auto d-block' alt="" />
            </div>
          </div>
        </div>
        </div>
        {/* --------------- */}
        <div className="container-xxl  mt-rl zero-padding">
          <div className="row ">
            
            <div className="col sec-relogio relativ-contain d-flex justify-content-center">
              <video src="/src/assets/bugatti/BugattiUniverse/Relogio/relogio4.mp4" className="video-section-relogio neumorphism" autoPlay muted loop ></video>
              <div className="re-p4">
                {/* <div className='posit-sp'>
                  <p className='text-center paragrafo-x'>
                    Em colaboração com Jacob & Co. Bugatti
                    embarca em uma nova era: a parceria entre o
                    fabricante francês de hiperesportivos Bugatti
                    e o fornecedor líder de relógios altamente
                    complexos Jacob & Co.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col sec-relogio  relativ-contain d-flex justify-content-center">
              <video src="/src/assets/bugatti/BugattiUniverse/Relogio/relogio2.mp4" className="video-section-relogio neumorphism" autoPlay muted loop ></video>
              <div className="re-p2">
                {/* <div className='posit-sp'>
                  <p className='text-center paragrafo-x'>
                    Em colaboração com Jacob & Co. Bugatti
                    embarca em uma nova era: a parceria entre o
                    fabricante francês de hiperesportivos Bugatti
                    e o fornecedor líder de relógios altamente
                    complexos Jacob & Co.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col sec-relogio  relativ-contain d-flex justify-content-center">
              <video src="/src/assets/bugatti/BugattiUniverse/Relogio/relogio3.mp4" className="video-section-relogio neumorphism" autoPlay muted loop ></video>
              <div className="re-p3">
                {/* <div className='posit-sp'>
                  <p className='text-center paragrafo-x'>
                    Em colaboração com Jacob & Co. Bugatti
                    embarca em uma nova era: a parceria entre o
                    fabricante francês de hiperesportivos Bugatti
                    e o fornecedor líder de relógios altamente
                    complexos Jacob & Co.
                  </p>
                </div> */}
              </div>
             
            </div>
          </div>
        </div>
        <div className="container mt-rl mb-5">
          <div className="row">
            <div className="col">
              <p className='font-2-relogio text-center'>
                Bugatti Chiron
                Tourbillon </p>
            </div>
          </div>
        </div>
      

      <Footer />
    </div>

  );
}
export default Relogio;