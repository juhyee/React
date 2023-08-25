import React from 'react'
import Dialog from './Dialog'

export default function ThankyouDialog() {
  return (
    <Dialog 
      title={<h1 style={{color: "purple"}}>Thanks</h1>}
      desc="It is honor to meet you!"
      button={<button style={{color: "white", backgroundColor: "blue"}}>Close</button>}
    />
  )
}
