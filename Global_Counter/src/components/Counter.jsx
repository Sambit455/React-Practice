import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const Counter = () => {
  const {count , increment , decrement , reset} = useContext(CounterContext)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter