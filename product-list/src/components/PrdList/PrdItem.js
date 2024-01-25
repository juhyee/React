import React, { useContext } from 'react'
import uuid from 'react-uuid'
import { AppContext } from '../../App'

function PrdCard(props) {

    const { addToWishList, handleSubmit, keyword } = useContext(AppContext);
    
    return (
        <>
            <div className='prdCard-item' key={uuid()}>
                <a href='/' className='prdCard-item__overlay' onClick={handleSubmit}>
                    <div className='prdCard-item__img' >
                        <img src={props.img} alt={props.title} />
                        <button
                            type='button'
                            className={props.wish ? 'prdCard-item__scrap on' : 'prdCard-item__scrap'}
                            onClick={() => addToWishList(props.data)}
                        >
                            <span className='blind'>장바구니 담기</span>
                        </button>
                    </div>
                    <div className="prdCard-item__info">
                        {keyword !== '' && props.brand.includes(keyword) ? (<span className="prdCard-item__brand">
                        {props.brand.split(keyword)[0]}<span className='highlight'>{keyword}</span> {props.brand.split(keyword)[1]}</span>) :
                            (<span className="prdCard-item__brand">{props.brand}</span>)
                        }
                        {keyword !== '' && props.title.includes(keyword) ? (<span className="prdCard-item__name">
                            {props.title.split(keyword)[0]}<span className='highlight'>{keyword}</span> {props.title.split(keyword)[1]}</span>) :
                            (<span className="prdCard-item__name">{props.title}</span>)
                        }
                        <div className="prdCard-item__star">
                            <div className="star" style={{ width: props.star * 2 + '%' }}><span className="blind"></span></div>
                        </div>
                        <p className="prdCard-item__price"><span className="sale">{props.sale}%</span> <span className="price">{props.price}</span>원</p>
                        <div className="prdCard-item__tag">
                            {
                                props.data.tag.map((item) => (
                                    <span className={`tag ${item}`} key={uuid()}></span>
                                ))
                            }
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default PrdCard