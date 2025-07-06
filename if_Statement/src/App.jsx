import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'

function App() {
  return (
    <>
      <Greeting isLoggedIn={true}/>
    </>
  )
}

export default App
