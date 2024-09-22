
import React from 'react'
import { Link,NavLink } from "react-router-dom";


function Navbar_2() {
    return (
        <div>
       <nav className="bg-gray-800">
    <div className="container mx-auto px-4 py-3">
        <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white hover:text-gray-400">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/Entertainment" className="text-white hover:text-gray-400">
                    Entertainment
                </Link>
            </li>
            <li>
                <Link to="/Technology" className="text-white hover:text-gray-400">
                    Technology
                </Link>
            </li>
            <li>
                <Link to="/Sports" className="text-white hover:text-gray-400">
                    Sports
                </Link>
            </li>
            <li>
                <Link to="/Business" className="text-white hover:text-gray-400">
                    Business
                </Link>
            </li>
            <li>
                <Link to="/Health" className="text-white hover:text-gray-400">
                    Health
                </Link>
            </li>
            <li>
                <Link to="/Science" className="text-white hover:text-gray-400">
                    Science
                </Link>
            </li>
 
        </ul>
    </div>
</nav>

    </div>
    
    )
}

export default Navbar_2
