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
    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, [])
  
  function scrollEvent(){
    let isScroll; //스크롤 상태 체크
    let scrollPosition = 0; //스크롤 위치
    const banner = document.querySelector('.header__banner').offsetHeight;
    const delta = banner; // 스크롤 감지 시작 위치
    const header = document.querySelector('.header__content--top') // scroll element
    const headerH = header.offsetHeight;

    console.log(headerH)
    window.onscroll = function () {
      isScroll = true;
    };
    
    setInterval(function () {
      if (isScroll) {
        scrollCheck();
        isScroll = false;
      }
    }, 150);
    
    function scrollCheck() {
      var currentScrollTop = window.scrollY;
      console.log(currentScrollTop + window.innerHeight )
      
      if (Math.abs(scrollPosition - currentScrollTop) <= delta) {
        return;
      }else if (currentScrollTop > delta) {
        header.classList.add('fixed');
      }else if(currentScrollTop <= headerH ){
        header.classList.remove('fixed');
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

