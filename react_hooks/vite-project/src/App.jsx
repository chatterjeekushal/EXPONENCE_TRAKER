

import { useState } from 'react'



function App() {


  let [counter, setcounter] = useState(10)


  //let counter=10

  const addvalue = () => {

    if (counter >= 20) {

      setcounter(counter = counter)
    }
    else {
      setcounter(counter = counter + 1)
    }

  }


  const removevalue = () => {

    if (counter <= 0) {

      setcounter(counter = counter)
    }
    else {
      setcounter(counter = counter - 1)
    }


  }


  return (
    <>
      <h1>hello react </h1>

      <h2>counter value {counter}</h2>

      <button onClick={addvalue}>add value</button>

      <br />
      <br />

      <button onClick={removevalue}>remove value</button>


      <h1>final result {counter}</h1>


    </>
  )
}

export default App
