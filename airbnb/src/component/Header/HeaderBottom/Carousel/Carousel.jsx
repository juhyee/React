import React from 'react';
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CarouselList from '../../../../json/carousel.json'


const Carousel = () => {
    return (
        <>
            <div className="carousel">
                <Swiper navigation={true} modules={[Navigation]} slidesPerView={22} slidesPerGroup={22} className="carousel__swiper">
                    {CarouselList.map((item, index) => (
                        <SwiperSlide>
                            <a href={item.itemLink}>
                                <img className='carousel__img' src={item.itemImg} alt={item.itemName} />
                                <span className='carousel__text'>{item.itemName}</span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
};

export default Carousel;