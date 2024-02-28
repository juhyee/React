import { createContext, useState, useEffect } from "react";
import dummy from "data/prdList";

export const globalStateContext  = createContext();

export const GlobalStateContext = ({ children }) => {
    const addComma = () => {
        let priceNum = document.querySelectorAll('.price')
        priceNum.forEach((itme, _) => (
            itme.innerText = itme.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ))
    }

    // 장바구니 useState
    const [wishList, setWishList] = useState([])
    const [toast, setToast] = useState(false);
    const [toastState, setToastState] = useState([])

    // 장바구니에 상품 추가 (스크랩)
    const addToWishList = (obj) => {
        const existingObject = wishList.find((ele) => ele.id === obj.id);

        if (Boolean(existingObject) === false) { // 장바구니 상품 중복 체크(장바구니에 담기)
            obj.wish = true;
            setWishList((prevList) => [...prevList, obj]);
            setToast(true)
            setToastState(['상품이 장바구니에 담겼습니다.', 'notice'])

            return wishList

        } else if (Boolean(existingObject) === true) {  // 장바구니 상품 중복 체크(장바구니에서 제거)
            obj.wish = false;
            setWishList(() => wishList.filter((item, _) => item.id !== obj.id));
            setToast(true)
            setToastState(['상품이 장바구니에서 삭제되었습니다.', 'caution'])

            return wishList
        }
    }

    // 장바구니에 추가된 상품 삭제
    function onDelete(obj) {
        setWishList(() => wishList.filter((item, _) => item.id !== obj.id));
        obj.wish ? obj.wish = false : obj.wish = true;
        return wishList
    };

    // 키워드 관련
    const [keyword, setKeyword] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const getSearchKeyword = (input) => {
        setKeyword(input.target.value)
    }

    useEffect(() => {
        const results = dummy.products.filter((item, _) => {
            return item.title.includes(keyword) || item.brand.includes(keyword)
        })
        setSearchResults(results);
    }, [keyword]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <globalStateContext.Provider 
            value={{
                addComma,
                addToWishList,
                onDelete,
                handleSubmit,
                getSearchKeyword,
                wishList,
                setWishList,
                searchResults,
                setSearchResults,
                toast,
                setToast,
                toastState,
                setToastState
            }}>
            {children}
        </globalStateContext.Provider  >
    );
}   


export default GlobalStateContext