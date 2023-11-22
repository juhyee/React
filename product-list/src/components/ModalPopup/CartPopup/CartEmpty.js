import React from 'react'

function CartEmpty() {
    return (
        <>
            <div className="nodata">
                <div className="nodata__contents">
                    <p>장바구니가 비어있습니다.</p>
                    <span>상품을 장바구니에 담아보세요.</span>
                </div>
            </div>
        </>
    )
}

export default CartEmpty