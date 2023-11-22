import React, { useState } from 'react'

function CartPrd({ id, title, img, brand, price }) {
 
        const [prdCount, setPrdCount] = useState(0)
        const prdIncrease = () => {
            return setPrdCount((prev) => prev + 1)
        }
        const prdDecrease = () => {
            return prdCount > 0 ? setPrdCount((prev) => prev - 1) : 0
        }

        const delfuntcion = () => {
          
        }

    return (
        <>
            {

                <div className="product__item">
                    <div classN="product__thumb">
                        <img src={img} alt={title} />
                    </div>
                    <div className="product__info">
                        <span className="product__info--brand">{brand}</span>
                        <p className="product__info--title">{title}</p>
                        <p className="product__info--price price">{price}</p>
                        <div className="product__info--count">
                            <button
                                className="count__btn count__btn--minus"
                                title="수량 빼기"
                                onClick={prdDecrease}
                            >
                            </button>
                            <span className="count__input">
                                {prdCount}
                            </span>
                            <button
                                className="count__btn count__btn--plus"
                                title="수량 더하기"
                                onClick={prdIncrease}
                            ></button>
                        </div>
                    </div>
                    <button
                        className="product__btn--del"
                        data-id={id}
                        onClick={delfuntcion}
                    >
                        <span className='blind'>장바구니 삭제</span>
                    </button>
                </div>



            }
        </>
    )
}

export default CartPrd