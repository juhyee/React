import React, { useState, useEffect } from 'react'

function useCountDown(initiaCount) {
    const [getCount, setGetCount] = useState(initiaCount);
    const [isClose, setIsClose] = useState(false);

    useEffect(() => {
        const countDown = setInterval(() => {
            setGetCount((prev) => prev - 1)
        }, 1000);
        
        if (getCount === 0) {
            clearInterval(countDown)
            setIsClose(!isClose)
        }
        return () => clearInterval(countDown)
    }, [getCount])
    

  return {getCount, isClose}
}

export default useCountDown