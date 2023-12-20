import React, { useEffect, useContext, useState } from 'react'
import uuid from 'react-uuid'
import { AppContext } from '../../../App';

function CartPrd(props) {
        const { onDelete, AddComma } = useContext(AppContext);
        
        const prdIncrease = () => props.updateQuantity(props.id, props.quantity + 1);
        const prdDecrease = () => props.updateQuantity(props.id, props.quantity > 1 ? props.quantity - 1 : 1);
    
        const [total, setTotal] = useState(1);
        useEffect(() => {
            const totalPrice = props.price * props.quantity;
            setTotal(totalPrice);
            AddComma()
            
        });

        return (
            <>
            {
                
                <div className="product__item"  key={uuid()}>
                    <div className="product__thumb">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <div className="product__info">
                        <span className="product__info--brand">{props.brand}</span>
                        <p className="product__info--title">{props.title}</p>
                        <div className="product__info--count">
                            <button
                                className="count__btn count__btn--minus"
                                title="수량 빼기"
                                onClick={prdDecrease}
                            >
                            </button>
                            <span className="count__input">
                                {props.quantity}
                            </span>
                            <button
                                className="count__btn count__btn--plus"
                                title="수량 더하기"
                                onClick={prdIncrease}
                            ></button>
                        </div>
                        <p className="product__info--price price"><span>{total}</span> 원</p>
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