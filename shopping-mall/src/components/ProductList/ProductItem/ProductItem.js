import React from 'react'
import './ProductItem.scss'

function ProductItem(props) {

    return (
    <>
         <div className='prdCard-item'>
                <a href='/' className='prdCard-item__overlay' onClick={(e) => e.preventDefault()}>
                    <div className='prdCard-item__img'>
                        <img src={props.img} alt={props.title} />
                        <button
                            type='button'
                            onClick={() => props.addToWishList(props.data)}
                            className={"prdCard-item__scrap " + (props.wish && "on")}
                        >
                            <span className='blind'>장바구니 담기</span>
                        </button>
                    </div>
                    <div className="prdCard-item__info">
                
                        <span className="prdCard-item__brand">{props.brand}</span>
                        
                        <span className="prdCard-item__name">{props.title}</span>
                        <div className="prdCard-item__star">
                            <div className="star" style={{ width: props.star * 2 + '%' }}><span className="blind"></span></div>
                        </div>
                        <p className="prdCard-item__price"><span className="sale">{props.sale}%</span> <span className="price">{props.price}</span>원</p>
                        <div className="prdCard-item__tag">
                            {
                                props.data.tag.map((item) => (
                                    <span className={`tag ${item}`}></span>
                                ))
                            }
                        </div>
                    </div>
                </a>
            </div> 
    </>
  )
}

export default ProductItem