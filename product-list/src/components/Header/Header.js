import React from 'react'
import HeaderBanner from './HeaderBanner/HeaderBanner.js'
import Logo from '../../assets/images/logo.jpg'
import HeaderKategorie from './HeaderKategorie/HeaderKategorie'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import HeaderCart from './HeaderCart/HeaderCart.js'
import HeaderNav from './HeaderNav/HeaderNav.js'
import HeaderRank from './HeaderRank/HeaderRank.js'
import '../Header/Header.scss'

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <HeaderBanner />
        <div className="header__content">
          <div className='header__content--top'>
            <h1 className="logo header__logo">
              <img src={Logo} alt='오늘의 집' />
            </h1>
            <HeaderKategorie />
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

