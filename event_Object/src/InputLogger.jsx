import React from 'react'

const InputLogger = () => {
  const handleChange = (e) => {
    console.log("Input Value:", e.target.value)
  }



  return <input type="text" onChange={handleChange} />
}

export default InputLogger