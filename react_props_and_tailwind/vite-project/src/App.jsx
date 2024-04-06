import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj={

    username:"kushal",
    age:19
  }


  let newarry=[1,2,3,4,5]
  

  return (
    <>
      <h1 className="bg-green-400 text-red-600 p-2 rounded-xl">hello </h1>

                                    {/* pass an object someobj={myobj} myarry={newarry} */}
      <Card cardname="chaiaurcode" btntext="explore me"/>  
     <Card cardname="emma" />


    </>
  )
}

export default App
