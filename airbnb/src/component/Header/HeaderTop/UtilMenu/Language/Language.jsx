import React from 'react';
import LanguageIcon from '../../../../../assets/languageIcon.svg'

const Language = () => {
    return (
        <>
            <button className='utilMenu__link utilMenu__link--lang'>
                <img src={LanguageIcon} alt="언어" />
            </button>
        </>
    );
};

export default Language;