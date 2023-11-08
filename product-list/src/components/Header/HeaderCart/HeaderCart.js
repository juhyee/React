import React, { useEffect, useState } from 'react'
import './HeaderCart.scss'
import CartPopup from '../../ModalPopup/CartPopup/CartPopup'

function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false)
  function cardClick(){
    setIsOpen(() => true)
  }


  return (
   <>
     <button className="header__utill--cart" onClick={cardClick}>
        <span className="header__utill-count"></span>
    </button>
    {isOpen ? <CartPopup /> : ''}
   </>
  )
}

export default HeaderCart