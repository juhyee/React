import React, { useState, useEffect } from 'react'
import './Aside.scss'
import dummy from './data.json'
import AsideItem from './AsideItem';
import uuid from 'react-uuid'

function Aside() {
  
  // 임시 쇼파 영역 on 
  const [activeIndex, setActiveIndex] = useState(4)
  
  const toggleActive = (index) => {
    activeIndex === index ? setActiveIndex(undefined) : setActiveIndex(index);
  }
  

  
  return (
    <>
      <div className='aside'>
        {
          dummy.aside.map((item, _) => (
            <h3 className='aside-title' key={uuid()}>{item.title}</h3>
          ))
        }
        <ul className='aside-list'>
          {
            dummy.aside.map((item, _) => (
              item.children.map((item, idx) => (
                <AsideItem 
                  key={uuid()}
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