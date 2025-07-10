import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Counter = () => {
  const {state,dispatch} = useContext(CounterContext);
  const { count } = state;


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })} disable={count >= 20}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} disable={count <= 0}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      {count === 20 && <p style={{ color: "red" }}>Max limit reached</p>}
      {count === 0 && <p style={{ color: "blue" }}>Min limit reached</p>}
    </div>
  )
}

export default Counter