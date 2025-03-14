import React from 'react';
import './Filter.css'
import FilterIcon from '../../../../assets/filterIcon.svg'

const Filter = () => {
    return (
        <>
            <div className='filter'>
                <button className='filter__button'>
                    <img src={FilterIcon} alt="필터" />
                    <span>필터</span>
                </button>
            </div>
        </>
    );
};

export default Filter;