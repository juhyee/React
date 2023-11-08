import React, { useEffect } from "react";
import Header from "./components/Header/Header.js";
import PrdList from "./components/PrdList/PrdItem/PrdItem.js";

function App() {
  useEffect(() => {
    const totalNum = document.querySelectorAll('.prdCard-item').length
    document.querySelector('.prdCard__total > .num').innerText = totalNum
 
  })
  

  return (
  <>
    <Header />
    <div className="product__wrap prdCard">
      <p className="prdCard__total">총<span className="num"></span>개의 상품이 있습니다.</p>
      <PrdList />
    </div>
  </>
  );
}

export default App;
