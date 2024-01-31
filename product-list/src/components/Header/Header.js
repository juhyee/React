import React, { useEffect } from 'react'
import HeaderBanner from './HeaderBanner/HeaderBanner.js'
import Logo from '../../assets/images/logo.jpg'
import HeaderCategorie from './HeaderCategorie/HeaderCategorie.js'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import HeaderCart from './HeaderCart/HeaderCart.js'
import HeaderNav from './HeaderNav/HeaderNav.js'
import HeaderRank from './HeaderRank/HeaderRank.js'
import '../Header/Header.scss'

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', scorllHeader);
    return () => window.removeEventListener('scroll', scorllHeader);
  }, [])
  
  function scorllHeader(){
    let isScroll; //스크롤 상태 체크
    let scrollPosition = 0; //스크롤 위치
    const delta = 5; // 스크롤 감지 시작 위치
    const headerContent = document.querySelectorAll('.header__content')
    const bannerH = document.querySelector('.header__banner').clientHeight
    const headerTop = headerContent[0]
    const headerBottom = headerContent[1]
    const header = document.querySelector('.header') // scroll element
    const headerH = header.clientHeight;
    const scrollStart = bannerH + headerH
    
    console.log(scrollStart)

    window.onscroll = function () {
      isScroll = true;
    };
    
    setInterval(function () {
      if (isScroll) {
        scrollCheck();
        isScroll = false;
      }
    }, 250);
    
    function scrollCheck() {
      var currentScrollTop = window.scrollY;

      if (currentScrollTop > scrollPosition && currentScrollTop >= scrollStart) { //내리는거
        headerTop.classList.add('fixed');
        headerBottom.classList.remove('scroll');
      
      } else if (currentScrollTop <= scrollStart) { //상단고정
        headerTop.classList.remove('fixed');
        headerBottom.classList.remove('scroll');
      }
    
      scrollPosition = currentScrollTop;
    }
  }
  
  return (
    <>
      <header id="header" className="header">
        <HeaderBanner />
        <div className="header__content">
          <div className='header__content--top'>
            <h1 className="logo header__logo">
              <img src={Logo} alt='오늘의 집' />
            </h1>
            <HeaderCategorie />
            <HeaderSearch />
            <HeaderCart />
          </div>
        </div>

        <div className="header__content">
          <div className='header__content--bottom'>
            <HeaderNav />
            <HeaderRank />
          </div>
        </div>

      </header>
    </>
  )
}

export default Header

