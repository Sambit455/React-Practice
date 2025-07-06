import React, { useEffect, useState } from 'react'

const WelcomeMessage = () => {
  const [message , setMessage] = useState('');

  useEffect( () => {
    setMessage('Welcome To React')
  },[]);

  
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default WelcomeMessage