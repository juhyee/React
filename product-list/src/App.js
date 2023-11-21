import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header.js";
import PrdList from "./components/PrdList/PrdItem/PrdItem.js";

export const AppContext = createContext();

function App() {
  useEffect(() => {
    const totalNum = document.querySelectorAll('.prdCard-item').length;
    document.querySelector('.prdCard__total > .num').innerText = totalNum;

    let priceNum = document.querySelectorAll('.price')
    priceNum.forEach((itme, _) => (
        itme.innerText = itme.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ))

  })
  const [wishList, setWishList] = useState([])

  const addToWishList = (obj) => {
    const existingObject = wishList.find((ele) => ele.id === obj.id);
    if (Boolean(existingObject) === false) {
      obj.wish = true;
      setWishList((prevList) => [...prevList, obj]);
      return wishList
    }else if(Boolean(existingObject) === true){
      obj.wish = false;
      setWishList(wishList.filter((item, _) => item.id === obj.id));
      return wishList
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AppContext.Provider value={{ wishList, addToWishList, handleSubmit }}>
        <Header />
      </AppContext.Provider>
      <div className="product__wrap prdCard">
        <p className="prdCard__total">총<span className="num"></span>개의 상품이 있습니다.</p>
        <AppContext.Provider value={{ wishList, addToWishList, handleSubmit }}>
          <PrdList />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
