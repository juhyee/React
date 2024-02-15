import React from 'react'
import './Aside.scss'
import dummy from 'data/Aside.json'
import AsideItem from './AsideItem';
import useToggleList from 'hooks/useToggleList';

function Aside() {
  // 임시 [소파] 메뉴 활성화
  const { toggleActive, activeIndex } = useToggleList(4);
  const asideActive = 0

  return (
    <>
      <div className='aside__wrap'>
        {
          dummy.aside.map((item, idx) => (
            <>
              {
                asideActive === idx &&
                <div className='aside'>
                  <h3 className='aside-title'>{item.title}</h3>
                  <ul className='aside-list'>
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
                </div>
              }
            </>
          ))

        }
        <div className="aside__other">
          {
            dummy.aside.map((item, idx) => (
              <>
                {
                  asideActive !== idx &&
                  <h3 className='aside-title'>{item.title}</h3>
                }
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Aside