import React from 'react'
import { useState } from 'react'

const ToggleText = () => {
  const [show,setShow] = useState(false); 

  return (
    <div>
      <button onClick={ () => setShow(!show)}>
        {show ? 'hide' : 'show'}
        Message
      </button>
      {show && <p>This is a Hidden Message!!!</p>}
    </div>
  )
}

export default ToggleText