import { useState, useEffect, createContext } from 'react'
import './style/common.scss'
import Modal from './components/Modal/Modal.js';
import Button from './components/Button/Button'
import AppChildren from './components/Modal/AppChildren.js';
import Price from './components/Price/Price.js'


export const AppContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false)
  function modalHandel() {
    setIsOpen(!isOpen)
  }

  const [value, setValue] = useState(0);
  const onIncrease = () => {
    return setValue((prev) => prev + 1)
  }
  const onDecrease = () => {
    return value > 0 ? setValue((prev) => prev - 1) : 0
  }

  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });
  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeNickname = (e) => {
    setNickName(e.target.value)
  }


  const userInfo = {
    name : "김철수",
    job : "회사원"
  }

  return (
    <>
      {/*  */}
      <button className='btn' onClick={modalHandel}>모달버튼</button>
      {isOpen && <Modal modalCloseHandel={() => setIsOpen(!isOpen)} />}
      <Button />


      {/*  */}
      <div>
        <p>카운터입니다</p>
        <button onClick={onIncrease}>+</button>
        <span>{value}</span>
        <button onClick={onDecrease}>-</button>
      </div>

      {/*  */}
      <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickName} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>이름:</b>
            {name}
          </div>
          <div>
            <b>닉네임: </b>
            {nickName}
          </div>
        </div>
      </div>


      {/*  */}
      <AppContext.Provider  value={userInfo}>
      <AppChildren/>     
      </AppContext.Provider>



      
    </>
  );
}

export default App;
