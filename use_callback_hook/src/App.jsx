import { useCallback, useState } from 'react'

import './App.css'

import Todo from './components/Todo'

function App() {
  
  const [Tododetal, settodo] = useState(0)
  const [count, setcount] = useState(0)

const changecount=useCallback(()=>{

setcount(count+1)

},[Tododetal])

const changetodo=()=>{

  settodo(Tododetal+2)
}


  return (
    <>

    <Todo todo={Tododetal} cg={count} />

<p>my count is {count}</p>

<button onClick={changecount}>click</button>
<button onClick={changetodo}>click me</button>

    </>
  )
}

export default App
