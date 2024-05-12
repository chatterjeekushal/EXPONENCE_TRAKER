
import React from 'react'

function Button({handelbutton,inputresult,cleardeta}) {
    return (
        <div>

<div>

<button onClick={(e)=>handelbutton("7")}>7</button>
<button onClick={(e)=>handelbutton("8")}>8</button>
<button onClick={(e)=>handelbutton("9")}>9</button>
<button onClick={(e)=>handelbutton("/")}>/</button>
<br></br>
<button onClick={(e)=>handelbutton("4")}>4</button>
<button onClick={(e)=>handelbutton("5")}>5</button>
<button onClick={(e)=>handelbutton("6")}>6</button>
<button onClick={(e)=>handelbutton("*")}>*</button>
<br></br>
<button onClick={(e)=>handelbutton("1")}>1</button>
<button onClick={(e)=>handelbutton("2")}>2</button>
<button onClick={(e)=>handelbutton("3")}>3</button>
<button onClick={(e)=>handelbutton("-")}>-</button>
<br></br>
<button onClick={(e)=>handelbutton("0")}>0</button>
<button onClick={(e)=>handelbutton(".")}>.</button>
<button onClick={(e)=>{handelbutton("c");cleardeta()}}>c</button>
<button onClick={(e)=>handelbutton("+")}>+</button>
<br></br>
<button onClick={(e)=>{handelbutton("=");inputresult()}}>=</button>

</div>


        </div>
    )
}

export default Button
