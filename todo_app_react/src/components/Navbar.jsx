import React from 'react'

function Navbar() {
  return (
    
<nav className="flex justify-between bg-slate-700 text-white py-2">


<div className="logo">
<span className="font-bold text-xl mx-9"> your task</span>

</div>


<ul className="flex gap-8 mx-9">

<li className="cursor-pointer hover:font-bold transition-all duration-300">home</li>

<li className="cursor-pointer hover:font-bold transition-all duration-300">your task</li>


</ul>


</nav>



  )
}

export default Navbar
