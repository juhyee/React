import React,  { useContext, useEffect } from 'react'
import dummy from "../../data/store.json"
import PrdItem from "../PrdList/PrdItem.js"
import { AppContext } from '../../App'

function PrdCard() {

    const { addToWishList, AddComma } = useContext(AppContext);
    useEffect(() => {
        AddComma()
    })

    

    return (
        <>
            <p className="prdCard__total">총<span className="num">{dummy.products.length}</span>개의 상품이 있습니다.</p>
            <div className='prdCard__list'>
                {dummy.products.map((item, _) => (
                  <PrdItem 
                  className="prdCard-item"
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  brand={item.brand}
                  sale={item.sale}
                  star={item.star}
                  wish={item.wish}
                  data={item}
                  addToWishList={addToWishList}
                  />
                ))}
            </div>
        </>
    )
}

export default PrdCard

