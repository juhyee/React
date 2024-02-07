import React from 'react'
import './HeaderGnb.scss'
import HeaderRank from './HeaderRank/HeaderRank.js'
import dummy from 'data/headerGnb.json'


function HeaderGnb(porps) {

    return (
        <>
            <div className='header__content header__content--lnb'>
                <ul className='lnb'>
                    {dummy.HeaderCategorie.map((item, idx) => (
                        porps.activeIndex === idx ?
                            item.lnb.map((item, idx) => (
                                <li key={item.title} className={`lnb__item lnb__item0${idx + 1}`}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))
                            : ''
                    ))}
                </ul>
                <HeaderRank />             
            </div>
        </>
    )
}

export default HeaderGnb