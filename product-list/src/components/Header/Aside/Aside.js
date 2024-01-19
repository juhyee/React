import React, {useEffect} from 'react'
import './Aside.scss'
import dummy from './data.json'
import AsideItem from './AsideItem';

function Aside() {

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
              item.children.map((item, _) => (
                <AsideItem 
                  url={item.url}
                  title={item.title}
                  data={item}
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