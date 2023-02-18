import Footer from '/src/components/layout/Footer/Footer';
// ESTLIZAÇÃO
import '/src/components/layout/StyleTextos.css';
import '/src/pages/Molsheim/Molsheim.css'

// ROOT CONFIG COR AND FONT
import '/src/components/layout/ConfigColorsOthers.css';

// FontAwesomeIcon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

var acc = document.getElementsByClassName("accordioon-molsheim");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-molsheim");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function Moshelim() {
  return (
    <>
      <section className='container-xxl zero-padding'>
        <video src="/src/assets/bugatti/Molsheim/The_Molsheim_Experience.mp4" className='vid-molsh' id='vid-mols' loop autoPlay muted></video>
        <h1 className='h1-name-molsheim text-center mt-5' >A vida em Molsheim</h1>
      </section>

      {/* POST 1 */}
      <section className='mt-only-molsheim'>
        <div className='container-xxl zero-padding mt-molsheim'>
          <div className="row">
            <div className="">
              <header>
                <h2 id="lifestyle" className='h2-molsheim mb-4 ml-5' >CASA MOLSHEIM</h2>
              </header>
              <img src="/src/assets/bugatti/Molsheim/2.jpg" align="right" className="img-fluid img-molsheim ml-5" alt="Imagem responsiva" />
              <div className="col">
                <div className="row">
                  <p className='d-inline p-principal text-justify' >
                    A família Bugatti, localizada na França em Molsheim,
                    o local onde a grande marca nasceu, onde a história
                    de sucesso vive até hoje. Molsheim é o palácio da Bugatti,
                    nele Ettore Bugatti viveu, criou seus filhos e seus primeiros
                    projetos de automóveis. Em 1909, Ettore decidiu inovar, criar
                    seus próprios veículos que fossem fáceis de conduzir, leves e
                    elegantes, e é notado atualmente que seus valores ainda
                    continuam vivos na fábrica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-xxl zero-padding mb-5 '>
          <div className="row">
            <div className="mb-2 ">
              <img src="/src/assets/bugatti/Molsheim/11.jpg" align="left" className="img-fluid img-molsheim" alt="Imagem responsiva" />
              <div className="col mt-5">
                <div className="row">
                  <p className='p-principal  text-justify ' >
                    Ettore Bugatti era um perfeccionista. Ele desejava
                    apenas o melhor para seus carros, seus clientes, sua
                    empresa e para si mesmo, seguindo a máxima: “Se comparável,
                    não é mais Bugatti”. Hoje, temos orgulho de continuar a
                    tradição BUGATTI no local onde tudo começou, aqui em Molsheim.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <p className='txt-italic'>“Os sonhos não importa o preço." - Ettore Bugatti</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container-xxl zero-padding mb-5'>
          <div className="row">
            <div className=" mb-2">
              <img src="/src/assets/bugatti/Molsheim/6.jpg" align="right" className="img-fluid img-molsheim" alt="Imagem responsiva" />
              <div className="col mt-molsheim">
                <header>
                  <h2 className='h2-principal text-center'>Remise Nord bugatti - Clássicos</h2>
                </header>
                <p className='d-inline p-principal text-justify' >
                  Remise Nord, construído em 1853, abriga hoje alguns
                  exemplares e inovadores carros do passado, o Type 41
                  Royale, sendo um grande sucesso de todos os tempos que
                  é celebrado como auge seu design de corrida da historia
                  da Bugatti.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------ */}
        <div className="container-xxl zero-padding">
          <div className="row justify-content-md-end">
            <div className="col col-md-6 ml-2">
              <p className='txt-italic'>“Ettore Bugatti era um artista,
                pura e simplesmente; o que tinha de
                conhecimento científico resultou da
                experiência, além de uma inclinação
                mecânica natural, apoiada pelo dom da
                observação.” – Jean-Albert Grégoire</p>
            </div>
          </div>
        </div>

        {/* --- */}

        <div className='container-xxl zero-padding mb-5'>
          <div className="row">
            <div className=" mb-2 ">
              <img src="/src/assets/bugatti/Molsheim/b41r.png" align="right" className="img-fluid img-molsheim" alt="Imagem responsiva" />
              <div className="col">
                <header>
                  <h2 className='h2-principal text-center'>1930 Bugatti Tipo 41 Royale</h2>
                </header>
                <p className='d-inline p-principal text-justify' >
                  Conhecido como Royale, o Bugatti Type 41 Royale foi um
                  carro de extrema importância para Ettore Bugatti, era
                  bastante luxuoso e também o modelo mais exclusivo da Bugatti.
                  Projetado para vende-los à realeza e chefes de estados como
                  carro de luxo. Mas naquela época a realeza não pode
                  comprar tais coisas, pois estava em um momento muito critico
                  que era a Grande Depressão. A produção era estimada em 25 unidades,
                  mas conseguiu vender 6 unidades. Bugatti Royal tornou-se um grande
                  símbolo de status, sendo raro e o  mais desejado pelo mundo hoje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* parallax 2 */}

      <section className='parallax-lax-2'>
        <div className='container'>
          <h1 className='d-inline h1-name-molsheim' >Bugatti</h1>
        </div>
      </section>

      {/* NEW POST */}

      <div className='container-xxl zero-padding mb-5 mt-molsheim'>
        <div className="row">
          <div className=" mb-2 ">
            <img src="/src/assets/bugatti/Molsheim/1.jpg" align="right" className="img-fluid img-molsheim" alt="Imagem responsiva" />
            <div className="col">
              <header>
                <h2 className='h2-principal text-center'>A Marca Bugatti</h2>
              </header>
              <p className='d-inline p-principal text-justify' >
                Quem nesse planeta não tem a vontade de dirigir uma
                super máquina de 1.600 cv com um motor 8.0 W16 quadriturbo
                e que chega a atingir 490km/h. É meu amigo isso é o poder
                dos automóveis da marca Bugatti. Não é só o design luxuoso
                do carro que faz a marca ser o que é hoje, mas toda sua
                tradição, todos os princípios do seu criador que são
                presenciados por visitantes em Molsheim.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------ */}
      {/*  FABRICA / PRINCIPAL*/}
      <div className="container-xxl zero-padding">
        <div className="row">
          <div className="col">
            <header>
              <h2 className='h2-principal text-center'> Fábrica da Bugatti em Molsheim </h2>
            </header>
            <img src="/src/assets/bugatti/Molsheim/capamolsheim.jpg" align="right" className="img-fluid img-molsheim-large" alt="Imagem responsiva" />
          </div>
        </div>
      </div>
      {/* --------- */}

      <div className="container-xxl zero-padding mt-3">
        <div className="row">
          <div className="col">
            <img src="/src/assets/bugatti/Molsheim/atelie.jpg" className="img-fluid img-molsheim-fabrica-1 mb-3" alt="Imagem responsiva" />
            <p className='ml-2 p-principal text-justify' >
              Conhecida como Ateliê, a fabrica da Bugatti localizada
              na Alsácia, lar onde a marca foi fundada em 1909. Local
              onde a magia acontece. Cada Bugatti é feito à mão por
              artesões e mecânicos. Cerca de 70 unidades são produzidas
              por ano. O Ateliê representa modernidade, luxo, uma sensação
              de leveza, assim como os carros produzidos ali.
            </p>
          </div>
          <div className="col">
            <img src="/src/assets/bugatti/Molsheim/fabrica.jpg" className="img-fluid img-molsheim-fabrica" alt="Imagem responsiva" />
          </div>
        </div>
      </div>
      {/* REMISE SUD BUGATTI */}
      <div className='container-xxl zero-padding mt-5'>
        <div className="row">
          <div className="">
            <img src="/src/assets/bugatti/Molsheim/Remise-Sud-8.jpg" align="right" className="img-fluid img-molsheim" alt="Imagem responsiva" />
            <div className="col mt-molsheim">
              <header>
                <h2 className='h2-principal text-center'>Remise Sud </h2>
              </header>
              <p className='d-inline p-principal text-justify' >
                Remise Sud, local que costumava ser um estábulo dos
                cavalos de Ettore Bugatti. Hoje em dia você ainda
                encontra cavalos de força, só que em supermáquinas.
                Também é onde os clientes personalizam a seu gosto o
                seu novo super esportivo. Escolhem cores, materiais,
                várias outras opções de design exclusivos a disposição.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className='container-xxl zero-padding mb-5'>
        <div className="">
          <img src="/src/assets/bugatti/Molsheim/5.jpg" className="img-fluid img-molsheim-sud" alt="Imagem responsiva" />
        </div>
      </section>
      <div className="container">
        <h2 className='text-center h2-name-molsheim'>Molsheim Experience</h2>
        <p className='text-center'>Para mais informações sobre Molsheim Experience:</p>
      </div>
      <section id='marg-mb-molsheim'>
        <div className="col d-flex justify-content-center">
                <div className="card-referencia-molsheim">
                <>
                  <button className="accordioon-molsheim">
                  <div id='accordioon-items-molsheim'>
                    <div className='col'>
                    <FontAwesomeIcon icon={faGlobe} /> Referência
                    </div>
                    <div className="col" id='caretleft-molsheim'>
                    <FontAwesomeIcon icon={faCaretDown} /></div>
                    </div>
                  </button>
                  </>
                  <div className="panel-x-molsheim">
                       <p><span className='ppv-molsheim'> MOLSHEIM EXPERIENCE,</span> 
                       <a href="https://www.bugatti.com/brand/molsheim-experience/" className='ref-no-none-molsheim' target="_blank"> https://www.bugatti.com/brand/molsheim-experience/
                       </a>
                       </p>
                  </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
}
export default Moshelim;