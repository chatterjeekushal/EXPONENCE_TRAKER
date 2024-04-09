import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const [copy, setcopy] = useState("copy")


  //useREF HOOK


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      string += "0123456789";
    }

    if (character) {
      string += "@#%$&*_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);

      console.log(char);
      console.log(pass);
    }





    setPassword(pass);
  }, [length, number, character, setPassword]);


  const copyPasswordToclip=useCallback(()=>{

    passwordRef.current?.select()

    

    window.navigator.clipboard.writeText(password)

  },[password])



  const copychange=()=>{
    setcopy(prevState => prevState === 'copy' ? 'done' : 'copy');

    // setcopy mortha prevent state thaka mana jei data ta use state a defult defind kora hoiache 

    // aei line a bolache j prevstate mana copy === jodi copy hoi then done kora dau and copy == jodi copy na hoy then copy hoia jaba

  }


  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);





  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">Password Generator</div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value={password} 
        className="outline-none w-full py-1 px-3" 
        placeholder="Password" 
        readOnly 
        
        ref={passwordRef}
        />



        <button className='bg-red-800 px-7' onClick={()=>{copyPasswordToclip();copychange();}}>{copy}</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'></div>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }} />
        <label className='text-white'>Length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <label htmlFor="numberInput" className='text-white'>Number</label>
        <input
          type="checkbox"
          checked={number}
          id="numberInput"
          onChange={() => { setNumber(prev => !prev) }} />
      </div>

      <div className='flex items-center gap-x-1'>
        <label htmlFor="charInput" className='text-white'>Character</label>
        <input
          type="checkbox"
          checked={character}
          id="charInput"
          onChange={() => { setCharacter(prev => !prev) }} />
      </div>
    </>
  );
}

export default App;
