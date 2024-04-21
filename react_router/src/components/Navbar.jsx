import React from 'react'



import { NavLink } from 'react-router-dom'

function Navbar() {


  return (
    <div>

<nav>

<ul>
    <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">home</NavLink></li>
    <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">login</NavLink></li>
    <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/my_user/rana">user</NavLink></li>
    
</ul>

</nav>

    </div>
  )
}

export default Navbar
