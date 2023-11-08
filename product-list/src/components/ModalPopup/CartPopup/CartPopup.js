import React from 'react'
import '../CartPopup/CartPopup.scss'

function CartPopup() {
  

  return (
    <div className="cart-moodal modal">
    <div className="modal-wrap">
      <div className="modal-head">
        <h3>장바구니</h3>
        <button className="modal-head__btn--close"><span className="blind">장바구니 팝업 닫기</span></button>
      </div>
      <div className="modal__contents">
        <div className="modal-body">
          <div className="cart-product__list">
            {/* 상품뿌려지는곳 */}
          </div>
        </div>
        <div className="modal-footer">
          <button  className="modal__btn modal__btn--buy">구매하기</button>
          <p className="total-price">합계<span className="total-price__num price"></span>원</p>
        </div>
      </div>
    </div>
    <div className="filter"></div>
  </div>
  )
}

export default CartPopup