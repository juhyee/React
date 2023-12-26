import React from 'react'
import './HeaderCategorie.scss'

const HeaderCategorie = [
  {
      id: 1, 
      title: "커뮤니티",
      url: "/community"
  },
  {
      id: 2, 
      title: "쇼핑",
      url: "/shopping"
  },
  {
      id: 3, 
      title: "이사/시공/생활",
      url: "/etc"
  },
];

function HeaderNav() {
  return (
   <>
    <nav className="categorie">
        <ul>
          {HeaderCategorie.map((item, idx) => (
            <li key={item.id} className={`categorie__item categorie__item${idx + 1}`}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
    </nav>
   </>
  )
}

export default HeaderNav