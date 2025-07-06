import React, { useState } from 'react'

const ClickExample = () => {
  const [count,setCount] = useState(0)

  const handleClick = () => {
    setCount( prev => prev + 1)
  }

  return (
    <div>
      <h1>You Clicked {count} times.</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ClickExample