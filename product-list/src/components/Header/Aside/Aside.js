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

  dummy.aside.map((item, _) => {
    console.log(item.children)
  })

  return (
    <>
      <div className='aside__wrap'>
        {
          dummy.aside.map((item, idx) => {
            return <div className='aside'>
              {
                !idx ? <h3 className='aside-title' key={uuid()}>{item.title}</h3>
                  : <h3 className='aside-title' key={uuid()}><a href={item.url}>{item.title}</a></h3>
              }
              {
                !idx ? <ul className='aside-list'>
                  {
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

                  }
                </ul>
                  : ""}
            </div>
          })
        }
      </div>
    </>
  )
}

export default Aside