import './Modelos.css'
// Footer
import Footer from '/src/components/layout/Footer/Footer';

//----------------- POSTS IMG ------------------//

// Chiron Super
import ChironSuper from '/src/assets/bugatti/Modelos/SuperSport300/ChironSuperSport.jpg'
import ChironSuper2 from '/src/assets/bugatti/Modelos/SuperSport300/ChironSuperSportLateral2.jpg'

// ChironPurSport
import ChironPurSport from '/src/assets/bugatti/Modelos/SuperSport300/ChironPurSport.jpg'
import ChironPurSport2 from '/src/assets/bugatti/Modelos/SuperSport300/ChironPurSport2.jpg'

// ChironSportRed
import ChironSportRed from '/src/assets/bugatti/Modelos/SuperSport300/ChironSport.jpg';
import ChironSportRed2 from '/src/assets/bugatti/Modelos/SuperSport300/ChironSport2.jpg';

// Chiron
import ChironN from '/src/assets/bugatti/Modelos/SuperSport300/Chiron.jpg';
import ChironN2 from '/src/assets/bugatti/Modelos/SuperSport300/Chiron2.jpg';

// Imagem interior Bugatti - Slider
import ImgInteriorPrincipal from '/src/assets/bugatti/Modelos/SuperSport300/interiorresposivo.jpg'
import ImgInteriorBlack from '/src/assets/bugatti/Modelos/interiorbugatti/interiorblack.jpg'
import ImgInteriorBlue from '/src/assets/bugatti/Modelos/interiorbugatti/interiorblue.jpg'
import ImgInteriorYellow from '/src/assets/bugatti/Modelos/interiorbugatti/interioryellow.jpg'
import ImgInteriorRed from '/src/assets/bugatti/Modelos/interiorbugatti/interiorred.jpg'
import ImgInteriorBlue2 from '/src/assets/bugatti/Modelos/interiorbugatti/interiorblue2.jpg'
import ImgInteriorRed2 from '/src/assets/bugatti/Modelos/interiorbugatti/interiorred2.jpg'


import dBugatti from '/src/assets/bugatti/Modelos/SuperSport300/dBugatti.jpg'


// Logo Bugatti
// import lBugatti from '../../assets/bugatti/Modelos/logomodelos/lbugatti.png'
import logoBugatti from '/src/assets/logo.svg';
// ----------------------------- //

// Parallax
import Parallax1 from '/src/assets/bugatti/Modelos/capa/Parallaxscrolling2.png';
import Parallax2 from '/src/assets/bugatti/Modelos/capa/parallax2.png';
import Parallax4 from '/src/assets/bugatti/Modelos/capa/parallax4.png';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Autoplay,Pagination, Navigation } from "swiper";

// Refer??ncia Sites
import Referencia from '/src/components/layout/ReferenciaSites/Referencia';
// ------------- PARALLAX SCRIPT -------------------//

let parallax2 = document.getElementById('parallax2');
let parallax3 = document.getElementById('parallax3');
let parallax4 = document.getElementById('parallax4');
let textparallax = document.getElementById('textparallax');


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  textparallax.style.top = `${value * 0.8}%`;
  parallax2.style.opacity = `${value * 1.1}%`;
  parallax3.style.top = `${value * 1.2}%`;
  parallax4.style.top = `${value * 0.5}%`;

})

// ---------------------------------------------------- //


function Modelos() {
  return (
    <>
      <section className="parallax-lax-modelos container-xxl " id="lalax-modelos">
        <div className="container-xxl" >
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="h1-name-modelos text-center " id="textparallax" ><i ></i >MODELOS CHIRON</h1>
              <img src={Parallax2} alt="" id='parallax2' />
              <img src={Parallax1} alt="" id='parallax1' />
              <img src={Parallax4} alt="" id='parallax4' />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- */}
      <div className='container-xxl zero-padding '>
        <div className="row ">
          <div className="mt-2">
            <div className="row align-items-center">
              <div className='col-md-6 text-center d-flex justify-content-center'>
                <h2 className='h2-modelos text-center p-4'>"Nenhuma cria????o t??cnica
                  pode ser dita perfeita at?? que tamb??m seja perfeita a
                  partir de um ponto de vista est??tico." - Ettore Bugatti
                  </h2>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 ">
                <img src={dBugatti} align="right" className="img-fluid img-modelos " alt="Imagem responsiva" />
              </div>
              <div className="col-md-6 p-5 back-color ">
                <div id='card-modelos' className='rounded mx-auto d-block'>
                  <img src={logoBugatti} alt="logoBugatti" id='lg-w' />
              </div>
                <p className='p-modelos text-justify mt-3' id='padding-p' >
                  O CHIRON ?? o supercarro esportivo de produ????o mais r??pido,
                  potente e exclusivo da hist??ria da BUGATTI. Seu design
                  sofisticado, tecnologia inovadora e forma ic??nica e orientada
                  para o desempenho o tornam uma obra-prima ??nica de arte,
                  forma e t??cnica, que ultrapassa os limites da imagina????o.
                  A BUGATTI deve seu car??ter distinto a uma fam??lia de artistas
                  e engenheiros e sempre se esfor??ou para oferecer os
                  extraordin??rio, o incompar??vel, o melhor. Cada elemento do
                  CHIRON ?? uma combina????o de reminisc??ncia de sua hist??ria e
                  da tecnologia mais inovadora. O resultado ?? uma cria????o ??nica
                  de valor duradouro e realiza????es automotivas de tirar o f??lego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SWIPER SLIDER INTERIOR BUGATTI */}
      <section className='container-xxl zero-padding mb-5'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="storage-image-container">
          <SwiperSlide>
            <img src={ImgInteriorPrincipal} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorBlack} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorBlue} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorYellow} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorRed} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorBlue2} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImgInteriorRed2} className="img-interior" id='img-interior' alt="Imagem responsiva" />
          </SwiperSlide>
        </div>
      </Swiper>
      </section>

      {/* ------------------------------- */}

      <section className='container'>
        {/* CHIRON SUPER SPORT  */}
        <section className='slidercolor-2  border-edit'>
          <div className='container-xxl life-Style-2 '>
            <div className="row">
              <div className="col mb-2">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiperxt" id="mySwiperxt">
                  <SwiperSlide>
                    <img src={ChironSuper} align="left" className="img-fluid chiron-300 rd-img " alt="Imagem responsiva" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ChironSuper2} align="left" className="img-fluid chiron-300 rd-img  " alt="Imagem responsiva" />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="col">
                <div className="row mt-5 m-4">
                  <h3 className='paris-1-2 text-center'>CHIRON SUPER SPORT</h3>
                  <p className=' paris-2-2 text-justify mt-5'>
                    Com um motor 8.0 W16 com quatro
                    turbos entrega 100 cv extras, alcan??ando
                    nada menos que 1.600 cv de pot??ncia e 163,1
                    kgfm de torque (entre 2.000 e 7.000 rpm).
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CHIRON PUR SPORT */}
        <section className='slidercolor-2 mt-only-2 border-edit'>
          <div className='container life-Style-2 '>
            <div className="row">
              <div className="col mb-2">
                <h2 id="lifestyle" className='h2-name-2 animacao-scroll' ></h2>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiperxt" id="mySwiperxt">
                  <SwiperSlide>
                    <img src={ChironPurSport} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ChironPurSport2} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col" >
                <div className="row m-4">
                  <h3 className='paris-1-2 mt-4 mb-3 text-center' >CHIRON PUR SPORT</h3>
                  <p className='paris-2-2 text-justify' >
                    Com uma nova calibra????o para a transmiss??o
                    automatizada de dupla embreagem e 7 marchas.
                    Enquanto a pot??ncia continua a ser de 1.500 cv,
                    o corte de giro est?? 200 rpm mais alto do que
                    no Chiron, alcan??ando os 6.900 rpm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHIRON SPORT */}
        <section className='slidercolor-2 mt-only-2 border-edit'>
          <div className='container life-Style-2 '>
            <div className="row">
              <div className="col mb-2">
                <h2 id="lifestyle" className='h2-name-2 animacao-scroll' ></h2>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiperxt" id="mySwiperxt" >
                  <SwiperSlide>
                    <img src={ChironSportRed2} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ChironSportRed} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col">
                <div className="row m-4" >
                  <h3 className='paris-1-2  mt-4 mb-3 text-center' >CHIRON SPORT</h3>
                  <p className='paris-2-2 text-justify' >
                    A vers??o vermelha e preta - repleta de um
                    gigante '16' na grade frontal - ?? bastante
                    atraente. Esta vers??o Sport recebe tubos
                    de escape qu??druplos arredondados, logotipos
                    Sport nas soleiras das portas e console central.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHIRON */}
        <section className='slidercolor-2 mt-only-2 border-edit'>
          <div className='container life-Style-2 '>
            <div className="row">
              <div className="col mb-2">
                <h2 id="lifestyle" className='h2-name-2 animacao-scroll' ></h2>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiperxt" id="mySwiperxt">
                  <SwiperSlide>
                    <img src={ChironN} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ChironN2} align="left" className="img-fluid chiron-300 rd-img" alt="Imagem responsiva" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col">
                <div className="row m-4" >
                  <h3 className=' paris-1-2  mt-4 mb-3 text-center' >CHIRON</h3>
                  <p className=' paris-2-2 text-justify' >
                    Sucessor do eterno Veyron, o Bugatti Chiron
                    mostra como reunir em um mesmo pacote muito
                    luxo e desempenho impressionante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDI????ES ESPECIAIS */}
        <div className="container edit-especial mt-mt-2-2">
          <div className="row">
            <h2 className='h2-edit'>Edi????es Especiais</h2>
          </div>
        </div>


        {/* CHIRON SUPER SPORT 300+ */}
        <section className='container-xxl zero-padding  slidercolor-2 mt-5'>
          <div className="row ">
            <div className="col">
              <h2 id="lifestyle" className='h2-name-2 animacao-scroll' ></h2>
              <img src="/src/assets/bugatti/Modelos/SuperSport300/Frente300.jpg" data-aos="fade-right" data-aos-duration="1000" align="left" className="img-fluid wd-chiron" alt="Imagem responsiva" />
              <div className="row " >
                <div className="col ">
                  <h3 className=' paris-1-2  mb-3 text-center' >CHIRON SUPER SPORT 300+</h3>
                  <p className=' paris-2-2' >
                    Edi????o limitada a 30 unidades e j?? alcan??ou velocidade m??xima de 490 km/h.
                  </p>
                  <div className="col-lg-12" id="b-bottom">
                    <p className="text-consumo">Consumos - Misto:	22.5 L/100 Km 13 MPG UK 10 MPG US</p>
                  </div>
                  <div className="col-lg-12" id="b-bottom">
                    <p className="text-consumo">Consumos - Extra-Urbano:	15.2 L/100 Km 19 MPG UK 15 MPG US</p>
                  </div>
                  <div className="col-lg-12" id="b-bottom">
                    <p className="text-consumo">Consumos - Urbano:	35.2 L/100 Km 8 MPG UK 7 MPG US</p>
                  </div>
                  <div className="col-lg-12" id="b-bottom">
                    <p className="text-consumo">Emiss??es de CO2 :	516 g/Km (Bugatti)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/*  CHIRON LES L??GENDS DU CIEL   */}
        <section className='slidercolor-2'>
          <div className='container'>
            <div className="row">
              <div className="col  mt-5 mb-5">
                <img src="/src/assets/bugatti/Modelos/SuperSport300/ChironLegends.jpg" align="right" className="img-fluid chiron-300" alt="Imagem responsiva" />
                <div className="row ">
                  <div className="col">
                    <h3 className=' paris-1-2  mb-3' >Chiron <span className='les-legend'>Les L??gends Du Ciel</span></h3>
                    <p className=' paris-2-2 text-justify' >
                      Esta edi????o limitada Les L??gendes du Ciel
                      com base no Chiron Sport contar?? apenas com
                      20 unidades. Com mais de 1.500 cv que passeia
                      acima de 400km/h.
                    </p>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Misto:	22.5 L/100 Km 13 MPG UK 10 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Extra-Urbano:	15.2 L/100 Km 19 MPG UK 15 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Urbano:	35.2 L/100 Km 8 MPG UK 7 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Emiss??es de CO2 :	516 g/Km (Bugatti)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHIRON EDITION NOIRE */}
        <section className='slidercolor-2 mb-5'>
          <div className='container '>
            <div className="row">
              <div className="col">
                <h2 id="lifestyle" className='h2-name-2' ></h2>
                <img src="/src/assets/bugatti/Modelos/SuperSport300/ChironNoire.jpg" data-aos="fade-right" data-aos-duration="1000" align="left" class="img-fluid wd-chiron" alt="Imagem responsiva" />
                <div className="row" >
                  <div className="col ">
                    <h3 className='text-center paris-1-2 ml-2 mb-3' >CHIRON EDITION NOIRE</h3>
                    <p className='paris-2-2' >
                      Edi????o limitada a 20 unidades, hipercarro
                      que possui um motor W16 com quantro turbos de 1.500 cv 1.600 Nm.
                    </p>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Misto:	22.5 L/100 Km 13 MPG UK 10 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Extra-Urbano:	15.2 L/100 Km 19 MPG UK 15 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Consumos - Urbano:	35.2 L/100 Km 8 MPG UK 7 MPG US</p>
                    </div>
                    <div className="col-lg-12" id="b-bottom">
                      <p className="text-consumo">Emiss??es de CO2 :	516 g/Km (Bugatti)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-5'>
        <Referencia></Referencia>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Modelos;