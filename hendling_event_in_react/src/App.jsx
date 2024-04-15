import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const [name, setname] = useState("rana")

  const [form, setform] = useState({email:"",phone:""})

  const handelclick = () => {

    alert("hey i am click")
  }

  const handelmouseover = () => {

    alert("i am a mouse over")

  }

  const handelchange = (e) => {

    // console.log(e.target);

    // setname(e.target.value)

    console.log(e.target.name);
    setform({...form,[e.target.name]:e.target.value})

    // console.log({...form,[e.target.name]:e.target.value});

    console.log(form);

    

  }


  return (
    <>
      <div className="button">

        <button onClick={handelclick}>click me</button>

      </div>


      <div className="red">

        <button onMouseOver={handelclick}>click red</button>

      </div>

      <input type="text" name="email" value={form.email?form.email:""} onChange={handelchange} />


      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handelchange} />

      


    </>
  )
}

export default App
