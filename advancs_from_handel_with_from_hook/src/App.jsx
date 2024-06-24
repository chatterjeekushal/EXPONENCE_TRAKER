import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    
    formState: { errors,issubmitting },
  } = useForm()


  const onSubmit = (data) => {
    
    
    console.log(data)
  if(data.username !== "rana"){

    setError("myform",{message:"your from is not good order becouse user name invalid"})
  }
  
  }

  return (
    <>

    {issubmitting && <div>loding.....</div>}

      <div>

        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input  {...register("username",
            {
              required: { value: true, message: "this flid is requid" },

              minLength: { value: 3, message: "min lenght is 3" }

              , maxLength: { value: 8, message: "max lenght is 8" }
            })}
            type="text" id="" />

          {errors.username && <div>{errors.username.message}</div>}


          <input   {...register("password", { required: true })} type="password" id="" />
          <input disabled={issubmitting} type="submit" />

{errors.myform && <div>{errors.myform.message}</div>}

        </form>

      </div>


    </>
  )
}

export default App
