import React, { useEffect, useState } from 'react'
import './HeaderBanner.scss'

function HeaderBanner() {  
    const [timer, setTimer] = useState(15)

    useEffect(() => {
        const countDown = () => {
            
        }
    })

    return (
    <>
       <span>{timer}</span>
    </>
  )
}

export default HeaderBanner