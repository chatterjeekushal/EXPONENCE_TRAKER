
import React, { useState, useMemo } from 'react';
import './App.css';


const nums=new Array(100).fill(0).map((_, i) => ({
  index: i,
  isMagical: i === 50 ? true:false
}))

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            
            
            setCount((prv)=> prv+1);
          
          
            if(count==10){

              setNumbers(

                new Array(200).fill(0).map((_, i) => ({
                  index: i,
                  isMagical: i === 150,
                }))

              )


            }

          

          
          
          } }

           


        >
          Count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
