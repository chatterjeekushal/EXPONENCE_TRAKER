import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blance from './components/Blance'
import Expensecard from './components/Expensecard'
import Newtrangasan from './components/Newtrangasan'
import Tranjasanhhistoy from './components/Tranjasanhhistoy'
import { countercontext } from './context/context'


function App() {
  const [useramount, setuseramount] = useState(0)

  return (
    <>
     <countercontext.Provider value={{ useramount, setuseramount }}>
  <div className="min-h-screen bg-gray-100 p-4">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Expense Tracker</h1>

    <div className="flex flex-col md:flex-row gap-6">
      
      {/* First Component */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <Blance />
        <Expensecard />
        <Newtrangasan />
      </div>

      {/* Second Component */}
      <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <Tranjasanhhistoy />
      </div>

    </div>
  </div>
</countercontext.Provider>
</>
  )
}

export default App
