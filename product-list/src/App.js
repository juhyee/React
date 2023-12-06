import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header.js";
import PrdList from "./components/PrdList/PrdList.js";

export const AppContext = createContext();

function App() {
  const AddComma = () => {
    // const totalNum = document.querySelectorAll('.prdCard-item').length;
    // document.querySelector('.prdCard__total > .num').innerText = totalNum;
  
    let priceNum = document.querySelectorAll('.price')
    priceNum.forEach((itme, _) => (
        itme.innerText = itme.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ))
  }
  useEffect(() => {

  })
  const [wishList, setWishList] = useState([])

  const addToWishList = (obj) => {
    const existingObject = wishList.find((ele) => ele.id === obj.id);
    if (Boolean(existingObject) === false ) {
      obj.wish = true;
      setWishList((prevList) => [...prevList, obj]);
      return wishList
    }else if(Boolean(existingObject) === true){
      obj.wish = false;
      setWishList(() =>  wishList.filter((item, _) => item.id !== obj.id));
      return wishList
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onDelete = (obj) => {
    obj.wish = false;
    setWishList(() =>  wishList.filter((item, _) => item.id !== obj.id));
    console.log(wishList)
    return wishList
  };

  return (
    <>
      <AppContext.Provider value={{ wishList, handleSubmit, onDelete, AddComma }}>
        <Header />
      </AppContext.Provider>
      <div className="product__wrap prdCard">
        <AppContext.Provider value={{ wishList, setWishList, addToWishList, handleSubmit, onDelete, AddComma }}>
          <PrdList />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
