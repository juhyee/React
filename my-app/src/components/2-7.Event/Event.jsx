import React from 'react'

export default function Event() {

  const handleBtnClick = (e) => {
    // console.dir(e)
    console.log('handleBtnClick')
  }

  const handleMouseLeave = (e) => {
    console.dir(e)
    console.log('handleMouseLeave')
  }

  const handleClickCapture = () => {
    console.log('handleClickCapture')
  }

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2')
  }

  const handleClickBubble = () => {
    console.log('handleClickBubble')
  }

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleBtnClick} onMouseLeave={handleMouseLeave}>BUTTON</button>
      </div>
    </div>
  )
}
