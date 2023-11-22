import React, { useState, useContext, useEffect } from 'react'
import '../CartPopup/CartPopup.scss'
import CartEmpty from './CartEmpty';
import CartPrd from './CartPrd';
import { AppContext } from '../../../App'


function CartPopup(props) {
  function modalCloseHandel() {
    props.modalCloseHandel();
  }

  const { wishList, onDelete } = useContext(AppContext);

  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    if (wishList.length !== 0) {
      setIsEmpty(false)
      document.querySelector('.total-price__num').innerText = 0
    }
  }, [isEmpty])





  return (
    <div className="cart-moodal modal">
      <div className="modal-wrap">
        <div className="modal-head">
          <h3>장바구니</h3>
          <button className="modal-head__btn--close" onClick={modalCloseHandel}><span className="blind">장바구니 팝업 닫기</span></button>
        </div>
        <div className="modal__contents">
          <div className="modal-body">
            <div className="cart-product__list">
              {isEmpty ? <CartEmpty /> :
              wishList.map((item, _) => (
                <CartPrd
                  className="card"
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  brand={item.brand}
                  data={item}
                  onDelete={onDelete}
              /> ))}
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal__btn modal__btn--buy">구매하기</button>
            <p className="total-price">합계<span className="total-price__num price">0</span>원</p>
          </div>
        </div>
      </div>
      <div className="filter" onClick={modalCloseHandel}></div>
    </div>
  )
}

export default CartPopup