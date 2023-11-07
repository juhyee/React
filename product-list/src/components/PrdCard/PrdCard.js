import React, { useEffect } from 'react'
import uuid from 'react-uuid'
import '../PrdCard/PrdCard.scss'
import dummy from "../../data/store.json"


function PrdCard() {

    useEffect(() => {
        let priceNum = document.querySelectorAll('.price')
        priceNum.forEach((itme, _) => (
            itme.innerText = itme.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ))
    })
    return (
        <>
            <div className='prdCard'>
                {dummy.products.map((item, _) => (
                    <div className='prdCard-item' key={uuid()}>
                        <a href='/' className='prdCard-item__overlay'>
                            <div className='prdCard-item__img' >
                                <img src={item.img} alt='test' />
                            </div>
                            <div className="prdCard-item__info">
                                <span className="prdCard-item__brand">{item.brand}</span>
                                <p className="prdCard-item__name">{item.title}</p>
                                <div className="prdCard-item__star">
                                    <div className="star" style={{ width: item.star * 2 + '%' }}><span className="blind"></span></div>
                                </div>
                                <p className="prdCard-item__price"><span className="sale">{item.sale}%</span> <span className="price">{item.price}</span>원</p>
                                <div className="prdCard-item__tag">
                                    {
                                        item.tag.map((item) => (
                                           <span className={`tag ${item}`} key={uuid()}></span>
                                        ))
                                    }
                                </div>
                            </div>

                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PrdCard

