import React, { useContext } from 'react'
import './HeaderSearch.scss'
import { AppContext } from '../../../App'

function HeaderSearch() {
    const { getSearchKeyword } = useContext(AppContext);

    return (
        <>
            <div className="header__search">
                <input
                 type="text"
                 placeholder="상품명을 입력하세요."
                 className="header__search--input"
                 onKeyUp={getSearchKeyword}
                />
            </div>
        </>
    )
}

export default HeaderSearch