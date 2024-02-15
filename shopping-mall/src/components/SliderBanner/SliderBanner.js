import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';


function SliderBanner() {
  return (
    <>
      <div className='prdBanner'>
        <Swiper
          className='prdBanner-swiper'
          slidesPerView="1"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          loop={true}
          navigation={true}
        >
          
        </Swiper>
      </div>
    </>
  )
}

export default SliderBanner