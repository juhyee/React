import React from 'react'
import './Layout.scss'
import Header from 'components/Header/Header'
import Aside from 'components/Aside/Aside'



function index(props) {

  
  return (
    <>
    <div className='wrap'>
      <Header />
      <div className='container' id='container'>
        <div className='container__inner'>
          <Aside />
          <div className='contents'>
            {props.children}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index