import React from 'react'
import './HeaderCart.scss'
import CartPopup from 'components/Modal/CartPopup/CartPopup';
import useModal from 'hooks/useModal';


function HeaderCart() {
    const {isOpen, open} = useModal(0)

    return (
        <>
            <button className="header__utill--cart" onClick={open}>
                <span className="header__utill-count">0</span>
            </button>
            {isOpen && <CartPopup />}
        </>
    )
}

export default HeaderCart