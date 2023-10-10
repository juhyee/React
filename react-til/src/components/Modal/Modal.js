import React from 'react'
import '../Modal/Modal.scss'

function Modal(props) {
  function modalCloseHandel() {
    props.modalCloseHandel();
  }

  return (
    <>  
      <div className='modal' onClick={modalCloseHandel}>
        <div className="modal__wrap">
          <div className="modal__contents">
            <div className="modal-body">
              <p>
                정말 나가시겠습니까?
                <br />
                <span>빌더에 저장하지 않은 내역이 있습니다.</span>
              </p>
            </div>
            <div className="modal__buttons">
              <button className="modal__button modal__button--cancle" onClick={modalCloseHandel}>
                취소
              </button>
              <button className="modal__button" onClick={modalCloseHandel}>나가기</button>
            </div>
          </div>
        </div>
        <div className="filter"></div>
      </div>
    </>
  )
}

export default Modal