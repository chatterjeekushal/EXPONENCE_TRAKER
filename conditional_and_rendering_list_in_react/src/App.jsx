import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [showbtn, setshowbtn] = useState(true)

  const [todo, settodo] = useState([


    {
      title: "hey",
      desc: "i am good todo",

    },

    {
      title: "hey anther todo",
      desc: "i am bad todo",

    },

    {
      title: "hey man",
      desc: "i am grossary todo",

    }

  ])


  // const Todo =({todo})=>{return (<>


  // <div>{todo.title}</div>
  // <div>{todo.desc}</div>

  // </>)}



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      {showbtn ? <button>show btn</button> : "thanga"}

      {/* if showbtn true then display button and if showbtn false display thanga */}


      {/* {showbtn && <button>i will show</button>} */}

      {/* if show btn true then show button */}




      {

        todo.map((todo => {

          // return <Todo key={todo.title} todo={todo} />

          

            return (
              <>

                <div key={todo.title}>

                  <div>{todo.title}</div>
                  <div>{todo.desc}</div>

                </div>

              </>
            )

          

        }))
      }





      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>

          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
