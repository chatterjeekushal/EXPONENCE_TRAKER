import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';




function App() {


  const [todo, settodo] = useState("")

  const [todos, settodos] = useState([])





  const handeledit = () => {



  }






  const handeladd = () => {

    settodos([...todos, { id: uuidv4(), todo: todo, isCompleted: false }])

    settodo("")
    console.log(todos)

  }



  const handelchange = (e) => {

    settodo(e.target.value)




  }

  

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
  
    settodos(updatedTodos);
  };
  
  // Assuming you have a list of todos and setTodos function
  // todos is an array of objects with properties like id, text, isCompleted
  

  




  const handeldelete = (id) => {

    const newtodos = todos.filter(a => {
      return a.id !== id

    })

    settodos(newtodos)

  }














  return (
    <>

      <Navbar />

      <div className="container mx-8 my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh]">


        <div className="addtodo my-5">

          <h2 className="text-lg font-bold">add a todo</h2>

          <input onChange={handelchange} name={todo} type="text" className="w-1/2" />

          <button onClick={handeladd} className="bg-violet-800 hover:bg-violet-950 p-5 py-2 text-white rounded-md md mx-5 text-sm font-bold">add</button>

        </div>


        <h2 className="text-lg font-bold ">your todos </h2>

        <div className="todos">

          {
            todos.map((item) => {


              return (

                <div key={item.id} className="todo flex w-1/2 my-3 justify-between">

                  <input onChange={()=>{handleCheckbox(item.id)}} name={item.id} type="checkbox" value={item.isCompleted} id="" />

                  <div className={item.isCompleted ? "line-through" : ""}  >{item.todo}</div>

                  <div className="buttons">

                    <button onClick={handeledit} className="bg-violet-800 hover:bg-violet-950 p-7 py-1 text-white rounded-md md mx-6">edit</button>

                    <button onClick={() => { handeldelete(item.id) }} className="bg-violet-800 hover:bg-violet-950 p-7 py-1 text-white rounded-md md mx-1">delete</button>


                  </div>


                </div>

              )
            })
          }


        </div>


      </div>


    </>
  )
}

export default App
