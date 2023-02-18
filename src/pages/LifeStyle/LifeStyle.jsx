import React from "react";
import Footer from '/src/components/layout/Footer/Footer';


// ESTILIZAÇÃO
import '/src/pages/LifeStyle/LifeStyle.css';
import '/src/components/layout/StyleTextos.css';

// IMPORTAÇÃO DE IMAGEM
import CapaFinal from "/src/assets/bugatti/LifeStyle/CapaLifeStyle.png";

// Logo Bold Atelier
import LogoBold from "/src/assets/bugatti/LifeStyle/bold-logo.png";


// IMGAGENS POST SLIDE
//Post1
import PostSliderOne from "/src/assets/bugatti/LifeStyle/14.jpg";
import PostSliderOne2 from "/src/assets/bugatti/LifeStyle/21.jpg";
// Post2
import PostSliderTwo from "/src/assets/bugatti/LifeStyle/10.jpg";
import PostSliderTwo2 from "/src/assets/bugatti/LifeStyle/110.jpg";

// Post3
import PostSliderThree from "/src/assets/bugatti/LifeStyle/24.jpg";
import PostSliderThree2 from "/src/assets/bugatti/LifeStyle/p3.jpg";

// Post4
import PostSliderFour from "/src/assets/bugatti/LifeStyle/style1.jpg";
import PostSliderFour2 from "/src/assets/bugatti/LifeStyle/p4.jpg";

// LOGO CV
import LogoCV from "/src/assets/bugatti/LifeStyle/logo_white.png";
import LogoCVblack from "/src/assets/bugatti/LifeStyle/logo_black.png";



// Referencia

var acc = document.getElementsByClassName("accordioon-lifestyle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-lifestyle");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// FontAwesomeIcon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Swiper components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Swiper styles

// import required modules
import {Navigation} from "swiper";


function LifeStyle() {
  return (

    <>
      <section id="contact-section" className="container-xxl welcome-section-lifestyle">
        <div className='bg-lifestyle '>
          <img src="/src/assets/bugatti/LifeStyle/CapaFinalLifeStyle.png" id='bgvid' />
        </div>
      </section>

      {/* POST 1 */}
      <div className='container-xxl  zero-padding mt-ls' >
        <div className="row">
        </div>
        <div className="row">
        <div className="col-md-6">
            <div className=" p-5 rounded mx-auto d-block  " id='card-lifestyle'>
                <div id='container-logo'>
                  <img src={LogoCVblack} alt="logoBugatti" id='lg-lifestyle' />
                </div>
              </div>
              <div className="row ls-mt-ls" id="ls-mt-l">
                <p className='paris-3 text-center respon-txt-top-2 '>
                  CHANTILLY ARTS & ELEGANCE RICHARD MILLE</p>
              </div>
              <div className="mt-2">
                <div className="row m-4"> 
                  <p className=' font-arts text-center '>
                    Chantilly Arts et Elégance Richard Mille
                    é o lugar imperdível para os entusiastas de
                    carros. Neste evento, um museu automobilístico
                    único é formado pelos carros mais bonitos do mundo,
                    antigos e morden, notável graças ao Concours d'Etat -
                    Les Plus Belles Voitures du Monde - e ao Concours
                    d'Elégance com seus modernos carros-conceito .</p>
                </div>
              </div>
         </div>
          <div className="col-md-6 zero-padding">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper-1">
          <SwiperSlide>
          <img src={PostSliderOne} align="right" className="img-fluid img-post-1" alt="Imagem responsiva" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={PostSliderOne2} align="right" className="img-fluid img-post-1" alt="Imagem responsiva" />
          </SwiperSlide>
            </Swiper>
            </div>
           
        </div>
      </div>
      {/* POST  2*/}
      <div className='container-xxl zero-padding mt-post-2' id="mt-post-2">
        <div className="row">
          <div className="col-md-6 zero-padding respon-post2" >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper-2">
           <SwiperSlide>
            <img src={PostSliderTwo} align="left" className="img-fluid img-fluid-tm" alt="Imagem responsiva" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={PostSliderTwo2} align="left" className="img-fluid img-fluid-tm-2" id="img-fluid-tm-2" alt="Imagem responsiva" />
          </SwiperSlide>
          </Swiper>
           </div>
           <div className="col-md-6 ">
            <div className="mt-ls-1 resp-style">
              <p className="font-1-style respon-txt text-center" data-aos="fade-left" data-aos-duration="1000" >Bold Atelier Collection</p>
              </div>
              <div className="">
              <p className="font-2-style mt-1 text-center " data-aos="fade-left" data-aos-duration="1000" >Exclusive design style</p>
              </div>
            <img src={LogoBold} align="left" className="img-fluid img-bold mt-5" id="img-bold" alt="Imagem responsiva"  data-aos-duration="1500" data-aos="fade-left"/>
            </div>
        </div>
      </div>
      {/* POST 3 */}
      <div className='container-xxl zero-padding mt-respon ' id="mt-respon">
        <div className="row">
        <div className="col-md-6">
              <div className="mt-ls-1 resp-style3" id="mt-ls-1 ">
              <p className="font-mindset text-center" data-aos="fade-right" data-aos-duration="1000" >Mindset is everything!</p>
              </div>
              <div className="respon-post3" id="">
              <p className="font-mind-2  text-center" id="font-mind-2" data-aos="fade-right" data-aos-duration="1500">The weapon against bad luck is the positive energy generated by good thoughts.</p>
              </div>
          </div>

          <div className="col-md-6 zero-padding ">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper-3">
          <SwiperSlide align="left">
            <img src={PostSliderThree} align="left" className="img-fluid img-fluid-light" alt="Imagem responsiva" />
            </SwiperSlide>
            <SwiperSlide align="left">
            <img src={PostSliderThree2} align="left" className="img-fluid img-fluid-light" alt="Imagem responsiva" />
            </SwiperSlide>
            </Swiper>
            </div>
        </div>
      </div>

      {/* POST 4 */}
        <section className='container-xxl zero-padding'>
          <div className="row "> 
            <div className="col-md-6 zero-padding respon-post4">
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper-4">
              <SwiperSlide>
              <img src={PostSliderFour} align="left" className="img-fluid " alt="Imagem responsiva" />

              </SwiperSlide>
              <SwiperSlide> 
              <img src={PostSliderFour2} align="left" className="img-fluid " alt="Imagem responsiva" />
              </SwiperSlide>
              </Swiper>
              </div>

              <div className="col-md-6  mt-stst " id="mt-stst">
                  <div className=" resp-style4">
                      <p className="font-favorite  text-center" data-aos="fade-right" data-aos-duration="1000">Favorite outfit </p>
                  </div>
                  <div>
                  <p className="font-2-style mt-1 text-center" data-aos="fade-right" data-aos-duration="1000">this season</p>
                  <p className="font-1-style mt-1 text-center" data-aos="fade-right" data-aos-duration="1000" >Good Shoes </p>
                  <p className="font-1-style mt-1 text-center" data-aos="fade-right" data-aos-duration="1000">Take you </p>
                  <p className="font-1-style mt-1 text-center" data-aos="fade-right" data-aos-duration="1000">Good Place </p>
                  </div>
               </div>
           </div>
        </section>
      
      {/* SOCIAL */}
      <section>
        <div className="container mt-stst">
          <div className="row ">
            <div className="col">
              <h2 className="h-social ">
                SOCIAL <span> @cvety_vassileva</span>
              </h2>
              <div className="row">
                <div className="col sec-vid vid ml-4">
                  <video src="/src/assets/bugatti/LifeStyle/videos/video6.mp4" className="video-section" autoPlay muted loop ></video>
                  <video src="/src/assets/bugatti/LifeStyle/videos/video5.mp4" className="video-section" autoPlay muted loop ></video>
                  <video src="/src/assets/bugatti/LifeStyle/videos/video2.mp4" className="video-section" autoPlay muted loop ></video>
                  <video src="/src/assets/bugatti/LifeStyle/videos/video3.mp4" className="video-section" autoPlay muted loop ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid color-item">
        <div className="container p-2">
          <div className="row">
            <div className="col media-item">
              <header className=' mb-3 col'>
                {/* <h2 className='d-inline font-mindset ' >
                  <span>La bouteille sur mesure </span>
                </h2> */}
                <div className="col mt-4">
                <img src={LogoCV} className=" logo-cv rounded mx-auto d-block" alt="LogoCv" />
                </div>
                <div className="col mt-4">
                  <p className='text-item text-justify paris-1'>
                    Experienced Co-Owner with a demonstrated history of working
                    in the transportation/trucking/railroad industry. Skilled in
                    Search Engine Optimization (SEO), Negotiation, Microsoft Word,
                    Coaching, and Irritable Bowel Syndrome (IBS). Strong entrepreneurship
                    professional graduated from Stanton School of English.
                  </p>
                  </div>
                <h3 className='text-center h3-name mt-4'>Cvety Vassileva</h3>
              </header>
            </div>
          </div>
        </div>
      </section>

      {/* PARALLAX  */}
      <section className='parallax-life'>
        <div className='container'>
          <h1 className='h1-name-universe text-center' >Elegance</h1>
          <img src="/src/assets/bugatti/BugattiUniverse/carbon.PNG" className='universe' alt="" />
        </div>
      </section>

      <div className='container mt-5 mb-5'>
        <div className="row ">
          <div className="col ">
            <img src={CapaFinal} className="img-fluid img-capafinal rounded mx-auto d-block" alt="Imagem responsiva" />
          </div>
        </div>
      </div>

      {/* REFERÊNCIA */}
      <section id='marg-mb-lifestyle'>
        <div className="col d-flex justify-content-center">
                <div className="card-referencia-lifestyle">
                <>
                  <button className="accordioon-lifestyle">
                  <div id='accordioon-items-lifestyle'>
                    <div className='col'>
                    <FontAwesomeIcon icon={faGlobe} /> Referência
                    </div>
                    <div className="col" id='caretleft-lifestyle'>
                    <FontAwesomeIcon icon={faCaretDown} /></div>
                    </div>
                  </button>
                  </>
                  <div className="panel-x-lifestyle">
                       <p><span className='ppv-lifestyle'> Cvety Vassileva,</span> 
                       <a href="https://www.instagram.com/cvety_vassileva/" className='ref-no-none-lifestyle' target="_blank"> @cvety_vassileva
                       </a>
                       </p>
                  </div>
                </div>
            </div>
        </section> 

      {/* --------- */}

      <Footer />
    </>
  );
}


export default LifeStyle;


