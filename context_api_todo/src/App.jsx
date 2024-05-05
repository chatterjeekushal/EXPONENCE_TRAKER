import { useEffect, useState } from 'react'
import { Todoprovider } from './context'
import './App.css'
import Todoform from './components/Todofrom'
import { Todoitem } from './components'

function App() {
  const [todos, settodos] = useState([])


  const addTodo = (todo) => {

    settodos((prvtodo) => [{ ...todo, id: Date.now()}, ...prvtodo])
  }



  useEffect(() => {

const todos=JSON.parse(localStorage.getItem("todos"))

if(todos && todos.length>0){
settodos(todos)
}

  }, [])


useEffect(() => {
  
localStorage.setItem("todos",JSON.stringify(todos))
 
}, [todos])







  const updateTodo = (id, todo) => {

    settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))


  }


  const deleteTodo = (id) => {

    settodos((prev) => prev.filter((todo) => todo.id !== id))
  }



  const togglecomplete = (id) => {

    settodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo))
  }









  return (
    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, togglecomplete }}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>

<Todoitem todo={todo}/>

              </div>
            ))}
          </div>
        </div>
      </div>

    </Todoprovider>
  )
}

export default App
