import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop'
import './Header.css'
import HeaderBottom from './HeaderBottom/HeaderBottom'
const Header = () => {
    return (
        <>
        <header className='header' id='header'>
            <HeaderTop/>
            {/*  */}
            <HeaderBottom />
        </header>
        </>
    );
};

export default Header;