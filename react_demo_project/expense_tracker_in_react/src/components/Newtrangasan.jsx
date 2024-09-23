import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addTranjasan } from '../features/tranjasan/Tranjasan'

import { useContext } from 'react'
import { countercontext } from '../context/context'
import  createDocument  from '../appwrite/appdata'
import { ID } from 'appwrite'


function Newtrangasan() {

  const [input, setInput] = useState('')
  const [expance, setexpance] = useState('')

  const dispatch = useDispatch()

  const useramountvalue=useContext(countercontext)



  const addtranjasanhandaler = async (e) => {

    e.preventDefault();

    if (input && expance) {
      // Convert expance to a positive number and format it with a '+' sign
      const formattedExpance = `+${Math.abs(Number(expance))}`;
  
      // add appwrite database
   
      

      // Dispatch action with the values
      dispatch(addTranjasan({ input, expance: formattedExpance }));
  
      console.log(formattedExpance);
      console.log(useramountvalue.useramount);
  
      // Update user amount
      useramountvalue.setuseramount((amount) => amount + Number.parseInt(expance, 10));
  
      // Clear inputs after dispatch
      setInput('');
      setexpance('');
    }

  }


  const expancetranjasanhandaler = (e) => {

    e.preventDefault()

    if (input && expance) {
      
      dispatch(addTranjasan({ input, expance }));

      console.log(expance);
      

      console.log(useramountvalue.useramount);
      
      useramountvalue.setuseramount((amount)=>amount-Number.parseInt(expance))
    
      // Clear inputs after dispatch
      setInput('');
      setexpance('');
    }

  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-4">
    <div className="mb-4">
      <p className="text-gray-800 text-lg font-semibold mb-2">New Transaction</p>
      <p className="text-gray-600 mb-4">Balance: ${useramountvalue.useramount}</p>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter expense"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter amount"
            value={expance}
            onChange={(e) => setexpance(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={addtranjasanhandaler}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add Income
          </button>
          <button
            type="button"
            onClick={expancetranjasanhandaler}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default Newtrangasan
