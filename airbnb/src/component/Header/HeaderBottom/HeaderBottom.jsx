import React from 'react';
import './HeaderBottom.css'
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter'
const HeaderBottom = () => {
    return (
        <> 
            <div className="headerBottom">
                <Carousel />
                <Filter />
            </div>
        </>
    );
};

export default HeaderBottom;