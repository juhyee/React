import React from 'react'
import Header from 'components/Header/Header'

function index(props) {
  return (
    <>
    <div className='wrap'>
      <Header />
      <div className='container'>
        {props.children}
      </div>
    </div>
    </>
  )
}

export default index