import React from 'react'
import './SliderBanner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function SliderBanner() {
  const pagination = {
    clickable: true,
  };
  
  return (
    <>
      <div className='prdBanner'>
        <Swiper
          className='prdBanner-swiper'
          slidesPerView="1"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          navigation={true}
          pagination={pagination}
        
        >
          <SwiperSlide> <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/category_banners/170766228811235400.png' alt='해당 이미지의 저작권은 오늘의집 어플에 있습니다. '/></SwiperSlide>
          <SwiperSlide> <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/category_banners/170774989144484772.png' alt='해당 이미지의 저작권은 오늘의집 어플에 있습니다. '/></SwiperSlide>
          <SwiperSlide><img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/category_banners/170779846174054654.png' alt='해당 이미지의 저작권은 오늘의집 어플에 있습니다. '/></SwiperSlide>
          <SwiperSlide> <img src='https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/category_banners/170774948841269579.png' alt='해당 이미지의 저작권은 오늘의집 어플에 있습니다. '/></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default SliderBanner