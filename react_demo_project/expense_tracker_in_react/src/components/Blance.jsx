import React from 'react'
import { useContext } from 'react'
import { countercontext } from '../context/context'

function Blance() {

  const useramountvalue=useContext(countercontext)

  return (
    <div className="flex items-center justify-center h-[40vh] bg-gray-100 ">
    <div className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Balance: <span className="text-green-500 text-2xl">${useramountvalue.useramount}</span>
      </h1>
    </div>
  </div>
  
  
  
  )
}

export default Blance
