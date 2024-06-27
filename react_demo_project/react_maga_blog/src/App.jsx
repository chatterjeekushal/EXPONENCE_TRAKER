import { useState } from 'react'

import './App.css'

import conf from './conf/conf';

function App() {
  const [count, setCount] = useState(0)

  console.log(conf.appwright_url);

  return (
    <>

      <h1>a blog with appwright</h1>

    </>
  )
}



export default App
