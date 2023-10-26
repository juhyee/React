import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import '../Header/Header.scss'

import HeaderBanner from './HeaderBanner/HeaderBanner.js'

const Header = () => {
  return (
    <>
          <header id="header" className="header">
              <HeaderBanner />
              <div className="header__content">
                  <h1 className="logo header__logo">
                    <img src={Logo} alt='오늘의 집'/>
                  </h1> 
                  <nav className="gnb">
                      <ul>
                          <li className="gnb__item"><a href="{() => false}">커뮤니티</a></li>
                          <li className="gnb__item on"><a href="{() => false}">쇼핑</a></li>
                          <li className="gnb__item"><a href="{() => false}">이사/시공/수리</a></li>
                      </ul>
                  </nav>
                  <div className="header__search">
                      <input type="text" placeholder="상품명을 입력하세요." className="header__search--input" />
                  </div>

                  <div className="header__utill">
                      <button className="header__utill--cart">
                          <span className="header__utill-count"></span>
                      </button>
                  </div>
              </div>
          </header>
    </>
  )
}

export default Header

