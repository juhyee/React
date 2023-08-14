import React, { useState } from 'react'

export default function State() {
  const initalCount = 0
  const [count, setCount] = useState(initalCount)

  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initalCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev -1)}>-</button>
      <button onClick={() => setCount(next => next +1)}>+</button>
    </div>
  )
}
