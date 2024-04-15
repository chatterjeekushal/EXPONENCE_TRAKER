import { useState ,useRef } from 'react'

import './App.css'

function App() {

  const inputfocus=useRef(null)

  function myfouce(){

    inputfocus.current.value="kushal"

  }

  
  

  return (
    <>
   
   <input type="text" ref={inputfocus} />

   <button onClick={myfouce} >click me</button>

    </>
  )
}

export default App
