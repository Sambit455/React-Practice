import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notification from './Notification'

function App() {

  return (
    <>
      <Notification hashMessage={true}/>
    </>
  )
}

export default App
