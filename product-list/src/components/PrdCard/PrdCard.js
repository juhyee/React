import React from 'react'
import '../PrdCard/PrdCard.scss'
import dummy from "../../data/store.json"

function PrdCard() {
    function Tag(){
        
    }
    return (
        <>
            <div className='prdCard'>
                {dummy.products.map((item, idx) => (
                    <div className='prdCard-item'>
                        <a href='/' className='prdCard-item__overlay'>
                            <div className='prdCard-item__img' key={item.id} >
                                {/* <img src={PrdImg} alt='test' /> */}
                            </div>
                            <div className="prdCard-item__info">
                                <span className="prdCard-item__brand">{item.brand}</span>
                                <p className="prdCard-item__name">{item.title}</p>
                                <div className="prdCard-item__star">
                                    <div className={`star star${item.star}`}><span className="blind"></span></div>
                                </div>
                                <p className="prdCard-item__price"><span className="sale">{item.sale}%</span> <span className="price">{item.price}</span>원</p>
                                <div className="prdCard-item__tag">
                                <span className={`tag ${dummy.products[idx].tag[idx]}`}></span>
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

