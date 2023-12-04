import React, { useState ,useContext } from 'react'
import { AppContext } from '../../../App';
import { cardPopupContext } from './CartPopup';

function CartPrd(props) {
        const { onDelete } = useContext(AppContext);

        
    return (
        <>
            {

                <div className="product__item">
                    <div className="product__thumb">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <div className="product__info">
                        <span className="product__info--brand">{props.brand}</span>
                        <p className="product__info--title">{props.title}</p>
                        <p className="product__info--price price">{props.price}</p>
                        {/* <p className="product__info--price price">{totalPrice()}</p> */}
                        <div className="product__info--count">
                            <button
                                className="count__btn count__btn--minus"
                                title="수량 빼기"
                                onClick={props.prdDecrease}
                            >
                            </button>
                            <span className="count__input">
                                {props.prdCount}
                            </span>
                            <button
                                className="count__btn count__btn--plus"
                                title="수량 더하기"
                                onClick={props.prdIncrease}
                            ></button>
                        </div>
                    </div>
                    <button
                        className="product__btn--del"
                        onClick={() => onDelete(props.data)}
                    >
                        <span className='blind'>장바구니 삭제</span>
                    </button>
                </div>



            }
        </>
    )
}

export default CartPrd