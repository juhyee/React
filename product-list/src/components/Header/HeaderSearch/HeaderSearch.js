import React, { useState } from 'react'
import './HeaderSearch.scss'

function HeaderSearch(props) {

    const updateSearchKeyword = () => {
        // props.set
    }


    return (
        <>
            <div className="header__search">
                <input
                 type="text"
                 placeholder="상품명을 입력하세요."
                 className="header__search--input"
                 onKeyUp={updateSearchKeyword}
                />
            </div>
        </>
    )
}

export default HeaderSearch