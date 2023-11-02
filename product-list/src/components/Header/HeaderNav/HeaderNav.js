import React from 'react'
import './HeaderNav.scss'
import Navdata from './data.js';

function HeaderNav() {
  
  return (
    <>
        <ul className='gnb'>
            {Navdata.map((item, idx) => (
                <li key={item.id} className={`gnb__item gnb__item${idx + 1}`}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>

    </>
  )
}

export default HeaderNav