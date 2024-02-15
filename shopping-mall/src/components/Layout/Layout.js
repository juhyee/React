import React from 'react'
import './Layout.scss'
import Header from 'components/Header/Header'

function index(props) {
  return (
    <>
    <div className='wrap'>
      <Header />
      <div className='container' id='container'>
        <div className='container__inner'>
          {props.children}
        </div>
      </div>
    </div>
    </>
  )
}

export default index