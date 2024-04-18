import { useState,useEffect } from 'react'

import './App.css'

import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';




function App() {


  const [todo, settodo] = useState('')

  const [todos, settodos] = useState([])


  const [showfinist, setshowfinist] = useState(true)


const savetolocal=(params) => {
  
  localStorage.setItem("todos",JSON.stringify(todos))
}




useEffect(() => {

let  todostring=localStorage.getItem("todos")

if (todostring) {
  
  let todos=JSON.parse(localStorage.getItem("todos")) 

  settodos(todos)
}

 

}, [])






  const handeladd = () => {

    settodos([...todos, { id: uuidv4(), todo: todo, isCompleted: false }])

    
    // Clearing the todo input field after adding a todo
    

    console.log(todos)

    settodo('')
    savetolocal()

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
      
      return todo

    });

    console.log(updatedTodos);

    settodos(updatedTodos)

    savetolocal()

   
  };

  // Assuming you have a list of todos and setTodos function
  // todos is an array of objects with properties like id, text, isCompleted






  const handeldelete = (e, id) => {
    const newtodos = todos.filter(a => a.id !== id);

    
    
    // Remove the item from localStorage
    localStorage.removeItem("todos");
    
    // Set the updated todos array in localStorage
    localStorage.setItem("todos", JSON.stringify(newtodos));
    
    settodos(newtodos);
}




  const handeledit = (id) => {


    let edittodo=todos.filter(i=>i.id===id)

console.log(`hello rana ${edittodo[0].todo}`);

settodo(edittodo[0].todo)

const newtodos = todos.filter(a => {
  return a.id !== id

})

settodos(newtodos)

savetolocal()


  }


  const togalefinished=(e) => {
    
    setshowfinist(!showfinist)

    console.log(!showfinist);

  }
  









  return (
    <>

      <Navbar />

      <div className="container mx-8 my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh]">


        <div className="addtodo my-5">

          <h2 className="text-lg font-bold">add a todo</h2>

          <input onChange={handelchange} name={todo} type="text" className="w-1/2" value={todo}  />

          <button onClick={handeladd} className="bg-violet-800 hover:bg-violet-950 p-5 py-2 text-white rounded-md md mx-5 disabled:bg-red-600 text-sm font-bold" disabled={todo.length < 3}>save</button>

        </div>


        <input type="checkbox" checked={showfinist} id="" onClick={togalefinished} /> show finished


        <h2 className="text-lg font-bold ">your todos </h2>

        <div className="todos">

          {todos.length === 0 && <div className="m-5">no todos display</div>}


          {
            todos.map((item) => {




// (showfinist || !item.isCompleted) jodi amr showfinist true hoy then ami sob todo gulo dhakabo but show finishrd jodi amar true na hoy then ami jei todogulo is complited false achia sudu sa golo kai dhaka bo



              return (showfinist || !item.isCompleted) && (

                <div key={item.id} className="todo flex w-1/2 my-6 justify-between">

                  <div className="flex justify-center gap-3 items-center">

                    <input onChange={() => { handleCheckbox(item.id) }} name={item.id} type="checkbox" checked={item.isCompleted} id="" />

                    <div style={{width:"50vw"}} className={ item.isCompleted ? "line-through" : ""}  >{item.todo}</div>

                  </div>

                  <div className="buttons flex h-full">


                    <button onClick={()=>{handeledit(item.id)}} className="bg-violet-800 hover:bg-violet-950 p-7 py-2 text-white rounded-md md mx-6">edit</button>


                    <button onClick={(e) => { handeldelete(e,item.id) }} className="bg-violet-800 hover:bg-violet-950 p-7 py-2 text-white rounded-md md mx-1">delete</button>


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
