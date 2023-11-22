import React,  { useContext } from 'react'
import dummy from "../../data/store.json"
import PrdItem from "../PrdList/PrdItem.js"
import { AppContext } from '../../App'

function PrdCard() {

    const { addToWishList } = useContext(AppContext);



    return (
        <>
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

