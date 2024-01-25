import React,  { useContext, useEffect } from 'react'
import './PrdList.scss'
import PrdItem from "../PrdList/PrdItem.js"
import { AppContext } from '../../App'

function PrdCard() {

    const { addToWishList, AddComma, searchResults } = useContext(AppContext);

    useEffect(() => {
        AddComma()
    })


    return (
        <>
            <p className="prdCard__total">총<span className="num">{searchResults.length}</span>개의 상품이 있습니다.</p>
            <div className='prdCard__list'>
                {searchResults.length === 0 ? 
                <div className='prdCard__nodata'>
                    <p>검색 결과가 없습니다.</p> 
                    <span>검색어를 다시 확인해 주세요.</span>
                </div>
                :
                searchResults.map((item, _) => (
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

