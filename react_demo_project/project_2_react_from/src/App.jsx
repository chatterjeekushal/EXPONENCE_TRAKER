import { useState } from 'react'
import fromimage from './assets/coder.jpg'

import './App.css'

import From from './components/From'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-[100%]  justify-evenly gap-3 h-[auto]">



    

<div className=' w-[100%]'>

<h1 className='text-2xl font-bold'>CONTACT US</h1>

<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, corrupti! Velit ex voluptate minus ipsum perferendis deserunt sed inventore ullam maxime itaque! Culpa odio q</div>


<From/>


</div>


<div className=' w-[100%]'>

<img src={fromimage} className="w-[100%] h-[98vh] "/>

</div>



    </div>
  )
}

export default App
