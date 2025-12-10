import { useState } from 'react'
import './App.css'
import logo from '../../assets/flying-bird.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} className="logo" alt="Big Oh!" />
      <h1>Big Oh!</h1>
      <p>A Timer/Stopwatch for CS50</p>
    </>
  )
}

export default App
