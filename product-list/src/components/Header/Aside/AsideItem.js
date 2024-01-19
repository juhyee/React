import React, { useState } from 'react'

function AsideItem(porps) {
  const [active, setActive] = useState(false);

  
  const asideActive=(e)=>{
    e.preventDefault();
    setActive(!active)
  }

  return (
    <>
     <li className={ !active ? `aside--depth01` : `aside--depth01 on`}>
      <a href={porps.url}
          className='aside__item'
          onClick={asideActive}
      >

        <span className='aside__item--name'>{
          porps.title
      }
        {active.toString()}      
      </span>
      {
        porps.data.hasOwnProperty('children') ? 
        <span className='aside__item--arrow'></span> 
        : ''
      }  
      </a>
      {
        porps.data.hasOwnProperty('children') ? <ul className="aside--depth02">
          {
            porps.data.children.map((item, _) => (
        <li>
              <a href={item.url} className='aside__item'>
                <span className='aside__item--name'>{item.title}</span>
              </a>
        </li>
            ))
          }
      </ul> : '' 
      }
    </li>
    </>
  )
}

export default AsideItem