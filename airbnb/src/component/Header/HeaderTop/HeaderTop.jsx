import React from 'react';
import './HeaderTop.css'
import Logo from '../../../assets/logo.svg'
import UtilMenu from './UtilMenu/UtilMenu';
import Option from './Option/Option'

const HeaderTop = () => {
    return (
        <>
            <div className='headerTop'>
                <div className='headerTop__inner'>
                    <a href="#" className='headerTop__logo'>
                        <img src={Logo} alt='airbnb'/>
                    </a>
                    <Option/>
                    <UtilMenu />
                </div>
            </div>
           
        </>
    );
};

export default HeaderTop;