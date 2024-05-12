import { useState } from 'react'

import './App.css'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [buttonvalue, setbuttonvalue] = useState([])


  const handelbutton=(value)=>{

    console.log(buttonvalue+value);

    setbuttonvalue(buttonvalue+value)

  }


  const inputresult=()=>{
try {
  
      setbuttonvalue(eval(buttonvalue).toString())
} catch (error) {
  console.log("calculate error",error);
}
  }

  const cleardeta=()=>{

    setbuttonvalue(" ")
  }


  return (
    <>

<h1>calculater app react</h1>

<Input buttonvalue={buttonvalue} />

<Button handelbutton={handelbutton} inputresult={inputresult} cleardeta={cleardeta} />



    </>
  )
}

export default App
