import React from 'react'
import { useState } from 'react'

const EventDemo = () => {
  const [text , setText] = useState('');
  const [focused , setFocused] = useState(false);
  return (
    <div>
      <input 
      type="text"
      value={text}
      onChange={ (e) => setText(e.target.value)}
      onFocus={ () => setFocused(true)}
      onBlur={ () => setFocused(false)}
       />
       <p>{focused ? "Input is Focused" : "Input is Blured"}</p>
    </div>
  )
}

export default EventDemo