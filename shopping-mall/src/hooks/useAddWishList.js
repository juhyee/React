import React, { useState, useEffect, useCallback } from 'react'

function useAddWishList() {
    
    const [wishList, setWishList] = useState([])
    const test = useCallback(() => addToWishList(wishList), [wishList])
    
    const addToWishList = (obj) => {
        // obj.preventDefault();
        const existingObject = wishList.find((ele) => ele.id === obj.id);
        
        if (Boolean(existingObject) === false) { // 장바구니 상품 중복 체크(장바구니에 담기)
            obj.wish = true;
            setWishList((prevList) => [...prevList, obj]);
            //   setToast(true)
            //   setToastState(['상품이 장바구니에 담겼습니다.', 'notice'])
            return wishList
            
        } else if (Boolean(existingObject) === true) {  // 장바구니 상품 중복 체크(장바구니에서 제거)
            obj.wish = false;
            setWishList(() => wishList.filter((item, _) => item.id !== obj.id));
            //   setToast(true)
            //   setToastState(['상품이 장바구니에서 삭제되었습니다.', 'caution'])
            return wishList
            
        }
    }

    
    useEffect(() => {
        document.querySelector('.header__utill-count').innerText = wishList.length
    })
    
    console.log(wishList)

    return { wishList, setWishList, addToWishList, test }

}

export default useAddWishList