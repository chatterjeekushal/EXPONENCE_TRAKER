
import React from "react";

import { createContext,useContext } from "react";

export const Todocontext=createContext({
    todos:[

        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:(id)=>{}
})

export const useTodo=()=>{

    return useContext(Todocontext)
}

export const Todoprovider=Todocontext.Provider