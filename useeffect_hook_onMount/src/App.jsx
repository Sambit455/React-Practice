import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage/>
    </>
  )
}

export default App
