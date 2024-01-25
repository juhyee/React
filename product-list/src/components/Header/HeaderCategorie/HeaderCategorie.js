import React, { useEffect } from 'react'
import './HeaderCategorie.scss'
import dummy from './data.json'

function HeaderNav() {
  
    {/* 임시 on */}
    useEffect(() => {
      const gnbEle = document.querySelectorAll('.categorie__item')
      gnbEle[1].classList.add('on')
    }, [])
  return (
   <>
    <nav className="categorie">
        <ul>
          {dummy.HeaderCategorie.map((item, idx) => (
            <li key={item[idx]} className={`categorie__item categorie__item${idx + 1}`}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
    </nav>
   </>
  )
}

export default HeaderNav