import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import { CounterProvider } from './context/CounterContext'

function App() {

  return (
    <CounterProvider>
      <Counter/>
    </CounterProvider>
  )
}

export default App
