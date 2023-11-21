import React, { useState, useContext, useEffect } from 'react'
import '../CartPopup/CartPopup.scss'
import { AppContext } from '../../../App'


function CartPopup(props) {
  function modalCloseHandel() {
    props.modalCloseHandel();
  }

  const { wishList} = useContext(AppContext);

  const [isEmpty, setIsEmpty] = useState(true)

  const EmptyContents = (
    <div className="nodata">
      <div className="nodata__contents">
        <p>장바구니가 비어있습니다.</p>
        <span>상품을 장바구니에 담아보세요.</span>
      </div>
    </div>
  );


  const useCounter = (initialState) => {
    const [prdCount, setPrdCount] = useState(initialState)
    const prdIncrease = (prd) => {
      return setPrdCount((prev) => prev + 1)
    }
    const prdDecrease = () => {
      return prdCount > 0 ? setPrdCount((prev) => prev - 1) : 0
    }
    return {
      prdCount,
      prdIncrease,
      prdDecrease
    }
  }
  const { prdCount, prdIncrease, prdDecrease } = useCounter(0)

  const ListContents = (
    wishList.map((item, _) => (
      <div className="product__item">
        <div class="product__thumb">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="product__info">
          <span className="product__info--brand">{item.brand}</span>
          <p className="product__info--title">{item.title}</p>
          <p className="product__info--price price">{item.price}</p>
          <div className="product__info--count">
            <button
             className="count__btn count__btn--minus"
             title="수량 빼기"
             onClick={prdDecrease}
             >
             </button>
            <span className="count__input">{prdCount}</span>
            <button 
             className="count__btn count__btn--plus"
             title="수량 더하기"
             onClick={prdIncrease}
             ></button>
          </div>
        </div>
        <button className="product__btn--del" data-id={item.id}></button>
      </div>

    ))
  );

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
              {isEmpty ? EmptyContents : ListContents}
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