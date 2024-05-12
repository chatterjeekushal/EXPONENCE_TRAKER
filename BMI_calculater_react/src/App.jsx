import { useMemo, useState } from 'react'

import './App.css'



const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;



function App() {
  
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  const [count, setcount] = useState(0)

  const output=useMemo(()=>{

    const calculateheight=height/100;

    console.log("bmi calculater");

    return (weight/(calculateheight*calculateheight)).toFixed(1)

  },[weight,height])


  return (
    <>
      <h1>Project 7: BMI CALCULATOR</h1>

      <div>

        <p>weight :{weight}</p>

        <input type="range" onChange={(e)=>{setWeight(e.target.value)}} step="1" min="40" max="220" />


        <p class="slider-output">Height:{height}</p>


        <input
          className="input-slider"
          onChange={(e)=>{setHeight(e.target.value)}}
          type="range"
          min="140"
          max="220"
        />




      </div>



      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>

      <button onClick={(e)=>{setcount(count+1)}}>click</button>

<p>count {count}</p>

    </>
  )
}

export default App
