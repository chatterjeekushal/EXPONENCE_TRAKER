import React from 'react'

import { useState,useRef ,useEffect} from 'react'


function App1() {

const [data, setdata] = useState()
    

    const add_data = useRef()

    const copy = useRef()
   


function copy_data() {
    
    copy.current.select()
}




useEffect(() => {
  
setdata(add_data.current.value)


},[add_data,data])





    return (
        <div>


<input type="text" ref={add_data} onChange={(e)=>setdata(e.target.value)}  />

<button onClick={copy_data}>copy</button>

<h1 ref={copy}>{data}</h1>



        </div>
    )
}

export default App1
