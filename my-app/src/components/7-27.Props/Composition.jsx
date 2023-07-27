import React from 'react'

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

export default function Composition() {
  return (
    <>
      <Welcome name="juhye"/>
      <Welcome name="2"/>
      <Welcome name="3"/>
      <Welcome name="4"/>
    </>
  )
}
