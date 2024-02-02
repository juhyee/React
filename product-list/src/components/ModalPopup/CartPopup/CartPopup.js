import React, { useEffect, useContext, createContext, useState } from 'react'
import uuid from 'react-uuid'
import ModalPortal from '../../portal/Portal';
import '../CartPopup/CartPopup.scss'
import CartEmpty from './CartEmpty';
import CartPrd from './CartPrd';
import { AppContext } from '../../../App'

export const cardPopupContext = createContext();


function CartPopup(props) {
  function modalCloseHandel() {
    props.modalCloseHandel();
  }

  const { wishList, setWishList, onDelete } = useContext(AppContext);
  
  const updateQuantity = (id, newQty) => {
    const newItems = wishList.map((item) => {
      if (item.id === id) return { ...item, quantity: newQty };
      return item;
    });
    setWishList(newItems);

    return wishList
  };

  const totalPirce = wishList.reduce((total, item) => total + item.price * item.quantity, 0)


  return (
    <>
      <ModalPortal>
        <div className="cart-moodal modal">
          <div className="modal-wrap">
            <div className="modal-head">
              <h3>장바구니</h3>
              <button className="modal-head__btn--close" onClick={modalCloseHandel}><span className="blind">장바구니 팝업 닫기</span></button>
            </div>
            <div className="modal__contents">
              <div className="modal-body">
                <div className="cart-product__list">
                  {wishList.length <= 0 ? <CartEmpty /> :
                    wishList.map((item, _) => (
                      <CartPrd  
                        key={uuid()}
                        data={item}
                        className="card"
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        brand={item.brand}
                        quantity={item.quantity}
                        onDelete={onDelete}
                        updateQuantity = {updateQuantity}
                      />))}
                </div>
              </div>
              <div className="modal-footer">
                <button className="modal__btn modal__btn--buy">구매하기</button>
                <p className="total-price">합계<span className="total-price__num price">{totalPirce}</span>원</p>
              </div>
            </div>
          </div>
          <div className="filter" onClick={modalCloseHandel}></div>
        </div>`
      </ModalPortal>
    </>

  )
}

export default CartPopup