import { useState } from 'react'
import './style/common.scss'
import Modal from './components/Modal/Modal.js';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function modalHandel() {
    setIsOpen(!isOpen)
  }
 
  return (
    <>
      <button className='btn' onClick={modalHandel}>모달버튼</button>
      {isOpen && <Modal modalCloseHandel={() => setIsOpen(!isOpen)}/>}
    </>
  );
}

export default App;
