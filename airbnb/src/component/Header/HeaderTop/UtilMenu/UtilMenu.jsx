import React from 'react';
import './UtilMenu.css'
import Profile from './Profile/Profile';
import Language from './Language/Language';

const UtilMenu = () => {
    return (
        <>
            <div className='utilMenu'>
                <a href="#" className='utilMenu__link utilMenu__link--creat'><span>당신의 공간을 에어비앤비하세요</span></a>
                <Language/>
                <Profile />
            </div>
        </>
    );
};

export default UtilMenu;