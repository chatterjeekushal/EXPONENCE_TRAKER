
import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <footer>
      <nav>
        <ul >
        <li>
            <Logo/>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
      <p>&copy;  Your Company Name</p>
    </footer>
  
  )
}

export default Footer
