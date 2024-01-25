import React, { useState, useCallback } from 'react'
import './Aside.scss'
import dummy from './data.json'
import AsideItem from './AsideItem';

function Aside() {

  const [activeIndex, setActiveIndex] = useState(undefined)

  const toggleActive = (index) => {
    activeIndex === index ? setActiveIndex(undefined) : setActiveIndex(index);
  }

  return (
    <>
    
      <div className='aside'>
        {
          dummy.aside.map((item, _) => (
            <h3 className='aside-title'>{item.title}</h3>
          ))
        }
        <ul className='aside-list'>
          {
            dummy.aside.map((item, _) => (
              item.children.map((item, idx) => (
                <AsideItem 
                  url={item.url}
                  title={item.title}
                  data={item}
                  isActive={activeIndex === idx}
                  onShow={() => toggleActive(idx)}
                />
              ))
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Aside