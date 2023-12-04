import React, { useEffect, useContext, createContext, useState } from 'react'
import '../CartPopup/CartPopup.scss'
import CartEmpty from './CartEmpty';
import CartPrd from './CartPrd';
import { AppContext } from '../../../App'

export const cardPopupContext = createContext();

function CartPopup(props) {
  function modalCloseHandel() {
    props.modalCloseHandel();
  }

  const { wishList, onDelete, AddComma } = useContext(AppContext);
  AddComma()

  const [totalAllPrice, setTotalAllPrice] = useState(0)
  const [prdCount, setPrdCount] = useState(1);
  const prdIncrease = () => {
    return setPrdCount((prev) => prev + 1)
  }
  const prdDecrease = () => {
    return prdCount > 0 ? setPrdCount((prev) => prev - 1) : 0
  }
  useEffect(() => {
    const total = wishList.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      return acc + itemPrice * prdCount;
    }, 0);
    setTotalAllPrice(total);
  });


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
              {wishList.length <= 0 ? <CartEmpty /> :
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
                  prdCount ={prdCount}
                  prdDecrease = {() => prdDecrease()}
                  prdIncrease = {() => prdIncrease()}
              /> ))}
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal__btn modal__btn--buy">구매하기</button>
            <p className="total-price">합계<span className="total-price__num price">{totalAllPrice}</span>원</p>
          </div>
        </div>
      </div>
      <div className="filter" onClick={modalCloseHandel}></div>
    </div>
  )
}

export default CartPopup