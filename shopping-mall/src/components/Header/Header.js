import React, { useState, useEffect } from 'react'
import './Header.scss'
import HeaderBanner from './HeaderBanner/HeaderBanner.js'
import HeaderTop from './HeaderTop/HeaderTop.js'
import HeaderGnb from './HeaderGnb/HeaderGnb.js'
import useToggleList from 'hooks/useToggleList.js'

function Header() {

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
      const headerH = document.querySelector('.header').clientHeight
      
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


  const { toggleActive, activeIndex } = useToggleList(0);

  console.log(activeIndex)

  return (
    <>
    <header className='header' id='header'>
      <HeaderBanner />
      <HeaderTop 
        toggleActive={toggleActive}
        activeIndex={activeIndex}
      />
      <HeaderGnb
        toggleActive={toggleActive}
        activeIndex={activeIndex}
      />
    </header>
    </>
  )
}

export default Header