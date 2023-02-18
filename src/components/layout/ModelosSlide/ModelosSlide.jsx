// SWIPER SLIDE
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// ESTILIZAÇÃO 
import '/src/components/layout/ModelosSlide/ModelosSlide.css';
import '/src/components/layout/StyleTextos.css';
import 'swiper/css';


function ModelosSlide (){
  return (
    <div className="container-xxl mt-only mt zero-padding" >
  <div className="row">
    <h2 id='models' className='h2-name mb-5 text-center'>Modelos</h2>
    <div className="col mt-2">
    <Swiper
spaceBetween={0}
slidesPerView={1}
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
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>
<SwiperSlide><img src="/src/assets/bugatti/7.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/9.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/4.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/12.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/3.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/mistral.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img src="/src/assets/bugatti/6.jpg" alt="" /></SwiperSlide>
    <div className="swiper-button-next-2"></div>
    <div className="swiper-button-prev-2"></div>
</Swiper>  
    </div>
  </div>
  <div className="container-xxl zero-padding text-center  p-0 " >
  <div className="row ">
    <div className="col "> 
      <p className='brutal-modelos '> BRUTAL PERFORMANCE</p>
    </div>
  </div>
</div>
</div>
  );
}
export default ModelosSlide;