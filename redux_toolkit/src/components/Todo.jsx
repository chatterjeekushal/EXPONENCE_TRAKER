import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoSlice'

function Todo() {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()

    return (
        <div>


{
    todos.map(todo=>(

        <li key={todo.id}>

{todo.text}

<button onClick={()=>dispatch(removeTodo(todo.id),console.log(todo.id))}>delete</button>

        </li>
    ))
}

        </div>
    )
}

export default Todo