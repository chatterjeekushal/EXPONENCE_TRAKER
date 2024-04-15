import React from 'react'

import { useState,useRef } from 'react'

function App2() {

    const [color, setcolor] = useState(true)

    const change = useRef()


    function change_color() {
        
        change.current.style.color = color ? "red" : "blue";
        setcolor(!color);
        
//This ternary operator checks the value of color. If it's true, it sets the color to "red" and updates color to false; otherwise, it sets the color to "blue" and updates color to true.        

    }


  return (
    <div>
      
<button onClick={change_color}>change_color</button>

<p ref={change}>hello</p>

<p>{color}</p>

    </div>
  )
}

export default App2
