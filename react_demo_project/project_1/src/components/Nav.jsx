import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="brand_logo">
                    <Link to="#" className="text-2xl font-bold text-gray-800">my logo</Link>
                </div>
                <div className="nav_menu_item">
                    <ul className="flex space-x-8">
                        <li>
                            <NavLink to="/" className={({ isActive }) => `text-gray-600 hover:text-blue-500 ${isActive ? "text-orange-700" : "text-gray-700"}`}>shoes1</NavLink>
                        </li>


                        <li>
                            <NavLink to="/shoes2" className={({ isActive }) => `text-gray-600 hover:text-blue-500 ${isActive ? "text-orange-700" : "text-gray-700"}`}>shoes2</NavLink>
                        </li>


                        <li>
                            <NavLink to="/shoes3" className={({ isActive }) => `text-gray-600 hover:text-blue-500 ${isActive ? "text-orange-700" : "text-gray-700"}`}>shoes3</NavLink>
                        </li>


                        <li>
                            <NavLink to="/shoes4" className={({ isActive }) => `text-gray-600 hover:text-blue-500 ${isActive ? "text-orange-700" : "text-gray-700"}`}>shoes4</NavLink>
                        </li>


                    </ul>
                </div>
                <div className='account_btn flex space-x-4'>
                    <Link to="#" className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100">login</Link>
                    <Link to="#" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">signup</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav
