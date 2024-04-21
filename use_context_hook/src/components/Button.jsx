

import React, { useContext } from 'react'

import Compo from './Compo'

import { countercountext } from '../context/context'

function Button() {

    const value=useContext(countercountext)

  return (
    <div>

<button onClick={()=>{value.setCount((count)=> count+1)}}>i am a button  <span><Compo/></span></button>
        
    </div>
  )
}

export default Button