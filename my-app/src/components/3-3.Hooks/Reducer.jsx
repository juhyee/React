import React, { useReducer } from 'react'

export default function Reducer() {
  const initalState = {count: 0}

  function reduer(state, action){
    switch(action.type){
      case 'reset':
        return initalState;
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reduer, initalState)

  return (
    <div>
      Count{Reducer} : {state.count}
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'increment'})}>+</button>
    </div>
  )
}
