import React from 'react'
import './HeaderBanner.scss'
import UseCountDown from 'hooks/UseCountDown.js'

function TopBanner() {
    const {getCount, isClose} = UseCountDown(20, false);

    return (
      <div className={`header__banner ${isClose ? "hide" : ""}`}>
          <a href='/'>
              <p><span className="header__banner--num">{getCount}</span>초 뒤면 사라져요! <b>2만원 할인받기</b></p>
              <button type='button' className="close_btn"><span className="blind">닫기</span></button>
          </a>
      </div>
  )
}

export default TopBanner