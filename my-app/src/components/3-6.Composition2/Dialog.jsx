import React, { useState } from 'react'

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <button onClick={()=> setIsOpen(true)}>Open</button>   
     {isOpen && 
        <div
            style={{
                position: "absolute",
                zIndex: 99,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "1px solid black",
                padding: 24, 
                backgroundColor: "white"
            }}
        >
            {typeof props.title === String ? <h1>{props.title}</h1> : props.title}
            {typeof props.desc === String ? <h5>{props.title}</h5> : props.desc}
            {typeof props.button === String ? <button style={{backgroundColor: "red", color: "white"}} onClick={() => setIsOpen(false)}>{props.button}</button>: 
            <div onClick={() => setIsOpen(false)}>{props.button}</div>}
        </div>}

     {isOpen && 
        <div 
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "lightgray"
            }}
         />}


      
    </>
  )
}
