import React from 'react'
import './HeaderCart.scss'
import CartPopup from 'components/Modal/CartPopup/CartPopup';
import useModal from 'hooks/useModal';
import useAddWishList from 'hooks/useAddWishList';


function HeaderCart() {
    const {wishList} = useAddWishList()
    const {isOpen, open} = useModal(0)
    console.log(wishList)

    return (
        <>
            <button className="header__utill--cart" onClick={open}>
                <span className="header__utill-count">{wishList.length}</span>
            </button>
            {isOpen && <CartPopup />}
        </>
    )
}

export default HeaderCart