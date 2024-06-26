import React from 'react'
import './ProductList.scss'
import useAddWishList from 'hooks/useAddWishList';
import ProductItem from './ProductItem/ProductItem'
import dummy from 'data/prdList.json'



function ProductList() {
  const {addToWishList} = useAddWishList()

  return (
    <>
      <div className='product__wrap prdCard'>
        <p className="prdCard__total">총<span className="num">{dummy.products.length}</span>개의 상품이 있습니다.</p>
        <ul className='prdCard__list'>
          {
            dummy.products.map((item, idx) => (
              <ProductItem 
                id={item.id}
                className="prdCard-item"
                title={item.title}
                img={item.img}
                price={item.price}
                brand={item.brand}
                sale={item.sale}
                star={item.star}
                wish={item.wish}
                data={item}
                addToWishList= {() => addToWishList(item)}
              />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default ProductList