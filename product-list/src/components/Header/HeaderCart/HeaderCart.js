import React, { useEffect, useState, useContext } from 'react'
import './HeaderCart.scss'
import CartPopup from '../../ModalPopup/CartPopup/CartPopup'
import { AppContext } from '../../../App'




function HeaderCart() {

  const { wishList } = useContext(AppContext);
  
  useEffect(() => {
    document.querySelector('.header__utill-count').innerText = wishList.length
  })

  const [isOpen, setIsOpen] = useState(false)
  function modalHandel() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="header__utill--cart" onClick={modalHandel}>
        <span className="header__utill-count"></span>
      </button>
      {isOpen && <CartPopup modalCloseHandel={() => setIsOpen(!isOpen)} />}
    </>
  )
}

export default HeaderCart