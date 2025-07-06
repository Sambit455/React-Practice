import React from 'react'
import { useState,useEffect } from 'react'

const Timer = () => {
  const [seconds , setSeconds] = useState(0)

  useEffect( () => {
    const intervalid = setInterval( () => {
      setSeconds(prev => prev + 1);
    },1000);

    return () => clearInterval(intervalid)
  },[])
  return (
    <div>
      <h3>Timer: {seconds}</h3>
    </div>
  )
}

export default Timer