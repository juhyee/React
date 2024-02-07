import React from 'react'

function AsideItem(porps) {
  return (
    <>
      <li className={`aside--depth01 ${porps.isActive ? 'on' : ''}`}>
        <div className='aside__item'>
          <a href={porps.url}
            className='aside__item--name'>
            {porps.title}
          </a>
          {
            porps.data.hasOwnProperty('children') ?
              <span className='aside__item--arrow' onClick={porps.onShow}></span>
              : ''
          }
        </div>
        {porps.data.hasOwnProperty('children') ? <ul className="aside--depth02">
          {
            porps.data.children.map((item, _) => (
              <li>
                <a href={item.url} className='aside__item'>
                  <span className='aside__item--name'>{item.title}</span>
                </a>
              </li>
            ))
          }
        </ul> : ''}
      </li>
    </>
  )
}

export default AsideItem