import React, { useEffect } from 'react'
import './HeaderTop.scss'
import logo from 'assets/images/logo.jpg'
import HeaderCart from './HeaderCart/HeaderCart'
import dummy from 'data/headerGnb.json'

function HeaderTop(porps) {

    
    return (
        <>
            <div className='header__content header__content--top'>
                <div className='header__inner'>
                    <h1 className="logo header__logo">
                        <img src={logo} alt='오늘의 집' />
                    </h1>

                    <ul className='header__gnb'>
                        {dummy.HeaderCategorie.map((item, idx) => (
                            <li 
                            key={item.id}
                            className={`gnb__item gnb__item0${idx + 1}${porps.activeIndex === idx  ? ' on' : ''}`}
                            onMouseEnter={() => porps.toggleActive(idx)}
                            onMouseLeave={() => porps.toggleActive(0)}
                            >
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="상품명을 입력하세요."
                            className="header__search--input"
                            />
                    </div>
                    
                    <HeaderCart />
                </div>
            </div>
        </>
    )
}

export default HeaderTop