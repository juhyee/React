import React, { useState } from 'react'

function useToggleList(initiaCount) {
    
  const [activeIndex, setActiveIndex] = useState(initiaCount)
  const toggleActive = (index) => {
    activeIndex === index ? setActiveIndex(initiaCount) : setActiveIndex(index);
  }
    
  return {toggleActive, activeIndex}

}

export default useToggleList