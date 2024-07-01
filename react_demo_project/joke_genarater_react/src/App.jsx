import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jock from './components/Jock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Joke Generator using react and joke api</h1>
   <Jock/>
    </>
  )
}

export default App
