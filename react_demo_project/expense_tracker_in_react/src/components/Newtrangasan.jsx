import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addTranjasan } from '../features/tranjasan/Tranjasan'

function Newtrangasan() {

  const [input, setInput] = useState('')
  const [expance, setexpance] = useState('')

  const dispatch = useDispatch()

  const addtranjasanhandaler = (e) => {

    e.preventDefault()

    if (input && expance) {
      // Dispatch action with the values
      dispatch(addTranjasan({ input, expance }));

      // Clear inputs after dispatch
      setInput('');
      setexpance('');
    }

  }

  return (
    <div>

      <div>

        <p>new tranjaction</p>

        <form  onSubmit={addtranjasanhandaler}>


          <input type="text" placeholder='enter expencence' value={input} onChange={(e)=>{setInput(e.target.value)}} />
          <input type="text" placeholder='enter amount' value={expance} onChange={(e)=>{setexpance(e.target.value)}} />
          <button type='submit'>add tranjasan</button>

        </form>

      </div>

    </div>
  )
}

export default Newtrangasan
