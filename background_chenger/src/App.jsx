import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // call usestate mathod
  const [color, setcolor] = useState("olive")
    //variabel name ,// function name = usestate("defult value")
  

  return (
    <>

      <div className="w-full h-screen ease-in duration-300" style={{ backgroundColor: color }}>


        <div className="fixed flex flex-wrap justify-center bottom-16 left-0 right-0 px-2">


          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

            <button className="outline-none border-none  px-4  py-1 rounded-full" style={{ backgroundColor: "red" }} onClick={() => { setcolor("red") }}>red</button>


{/* style={{key:value}} this is a syntax to defind inline css in react of an element 

onclick={()=>{ setcolor("red") }} on click is a function and its recive a nather function with a callback function   */}


            <button className="outline-none border-none  px-4  py-1 rounded-full" style={{ backgroundColor: "blue" }} onClick={() => { setcolor("blue") }}>blue</button>



            <button className="outline-none border-none  px-4  py-1 rounded-full" style={{ backgroundColor: "yellow" }} onClick={() => { setcolor("yellow") }}>yellow</button>



            <button className="outline-none border-none  px-4  py-1 rounded-full" style={{ backgroundColor: "pink" }} onClick={() => { setcolor("pink") }}>pink</button>



            <button className="outline-none border-none  px-4  py-1 rounded-full" style={{ backgroundColor: "green" }} onClick={() => { setcolor("green") }}>green</button>

            

            <button className="outline-none border-none bg-gray px-4  py-1 rounded-full" style={{ backgroundColor: "gray" }} onClick={() => { setcolor("gray") }}>gray</button>

          </div>

        </div>

      </div>

    </>
  )
}

export default App
