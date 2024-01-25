import React, { useEffect, useState } from 'react'
import './HeaderBanner.scss'

const HeaderBanner = () => {

  // 배너 자동 닫기 타이머 
  function Timer(props){
    const [getTime, setGetTime] = useState(props.time);
    
    useEffect(() => {
      const headerNum = document.querySelector('.header__banner--num')
      headerNum.innerText = getTime
      const timer = setInterval(() => {
        setGetTime((prev) => prev - 1)
        headerNum.innerText = getTime
      }, 1000);
      
      if(getTime === 0) {
        clearInterval(timer)
        document.querySelector('.header__banner').classList.add('hide')
      }
      return () => clearInterval(timer)
    }, [getTime])
  } 
  
  
  // 상단 배너 닫기
  const [close, setClose] = useState(true)
  const popupClose = () => {
    setClose(!close)
    document.querySelector('.header__banner').classList.add('hide')
  }
  
  return (
   <>
      <div className="header__banner">
              <a href='/'> 
                <p><span className="header__banner--num"><Timer time={20} /></span>초 뒤면 사라져요! <b>2만원 할인받기</b></p>
                <button type='button' className="close_btn" onClick={popupClose}><span className="blind">닫기</span></button>
              </a>
        </div>
   </>
  )
}

export default HeaderBanner