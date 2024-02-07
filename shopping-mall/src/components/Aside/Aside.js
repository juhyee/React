import React from 'react'
import './Aside.scss'
import dummy from 'data/Aside.json'
import AsideItem from './AsideItem';
import useToggleList from 'hooks/useToggleList';

function Aside() {
  // 임시 [소파] 메뉴 활성화
  const { toggleActive, activeIndex } = useToggleList(4);

  return (
    <>
      <div className='aside__wrap'>
        {
          dummy.aside.map((item, idx) => {
            return <div className='aside'>
              {
                !idx ? <h3 className='aside-title'>{item.title}</h3>
                  : <h3 className='aside-title'><a href={item.url}>{item.title}</a></h3>
              }
              {
                !idx ? <ul className='aside-list'>
                  {
                    item.children.map((item, idx) => (
                      <AsideItem
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