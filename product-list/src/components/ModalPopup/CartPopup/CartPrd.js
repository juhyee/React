import React, { useEffect, useContext, useState } from 'react'
import uuid from 'react-uuid'
import { AppContext } from '../../../App';

function CartPrd(props) {
        const { onDelete, AddComma } = useContext(AppContext);
        
        const [quantityValue, setQuantityValue] = useState(props.quantity + 1);

        const prdIncrease = () => {
            console.log(quantityValue)
            setQuantityValue((prev) => prev + 1);
            // props.quantity = setQuantity
            // return quantity
        }
        const prdDecrease = () => {
            setQuantityValue(quantityValue > 1 ? ((prev) => prev - 1) : 1)
            // props.quantity = setQuantity
            // return quantity
        }
        
        const [total, setTotal] = useState(props.price);

        useEffect(() => {
            const totalPrice = props.price * quantityValue;
            setTotal(totalPrice);
            // props.quantity = quantityValue
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
                                {quantityValue}
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