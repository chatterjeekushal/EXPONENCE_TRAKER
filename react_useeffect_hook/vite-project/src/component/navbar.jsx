

import React from 'react'

import { useEffect } from 'react'

function Navbar({color}) {

  // case1 run of every rander

  useEffect(() => {
    
  alert("hry i will run on every rander")
  
  })

  // case2 run only on first rander
  
  useEffect(() => {
    
    alert("hey welcome to my page this is the first rander")
    
    }, [])

    //case3 run only when certain value change

    useEffect(() => {
    
      alert("hey i am runing becouse color was changed")
      
      }, [])

  return (
    <div>
        navbar color is {color} 
        
        
        </div>
  )
}

export default Navbar