import React, { useState } from 'react'
import './HeaderRank.scss'
import dummy from 'data/headerRank.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import RankPopup from 'components/Modal/RankPopup/RankPopup.js'

function HeaderLank() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='rank'
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}>
                <Swiper
                    className='rank-swiper'
                    slidesPerView="1"
                    direction="vertical"
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    loop={true}
                >
                    {dummy.HeaderRank.map((item, _) => (
                        <SwiperSlide key={item.id} className={`rank__item rank__item--${item.state}`}>
                            <a href='/'>
                                <b className='rank__num'>{item.rank}</b>
                                <i className={`rank__state rank__state--${item.state}`} ></i>
                                <span className='rank__name'>{item.title}</span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <button type='button' className='rank__button'>
                    <span className='blind'>인기 검색어 열기</span>
                </button>
                {isOpen && (<RankPopup />)}
            </div>
        </>
    )
}

export default HeaderLank

