import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blance from './components/Blance'
import Expensecard from './components/Expensecard'
import Newtrangasan from './components/Newtrangasan'
import Tranjasanhhistoy from './components/Tranjasanhhistoy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>expense tracker</h1>

      <div className='preant_component'>

        <div className='first_div'>

          <Blance />
          <Expensecard />
          <Newtrangasan />

        </div>


        <div className='secend_component'>

          <Tranjasanhhistoy />

        </div>

      </div>

    </>
  )
}

export default App
