import React, { useEffect, useState } from 'react'
import HeaderBanner from './HeaderBanner/HeaderBanner.js'
import Logo from '../../assets/images/logo.jpg'
import HeaderCategorie from './HeaderCategorie/HeaderCategorie.js'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import HeaderCart from './HeaderCart/HeaderCart.js'
import HeaderNav from './HeaderNav/HeaderNav.js'
import HeaderRank from './HeaderRank/HeaderRank.js'
import '../Header/Header.scss'

const Header = () => {

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    window.addEventListener("scroll", updateScrollDirection); 
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); 
    };
    
  }, [scrollDirection]);

  let lastScrollY = window.pageYOffset;
  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    
    const direction = () => {
      const headerContent = document.querySelectorAll('.header__content')
      const headerTop = headerContent[0]
      const headerBottom = headerContent[1]
      const headerH = document.querySelector('header').clientHeight
      
      if(scrollY > lastScrollY){
        headerTop.classList.add('fixed')
        headerBottom.classList.remove('scroll')
      }else {
        headerBottom.classList.add('scroll')
        if (scrollY <= headerH){
          headerTop.classList.remove('fixed')
          headerBottom.classList.remove('scroll')
        }
      }  
    }
    
    if (direction !== scrollDirection) {
      setScrollDirection(direction);
    }

    lastScrollY = scrollY > 0 ? scrollY : 0; 
  };
  

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

