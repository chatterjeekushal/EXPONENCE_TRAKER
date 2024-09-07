
import React from 'react'
import { Container, Logoutbtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logoutbtn from './Logoutbtn'


function Header() {

    const authstatus = useSelector((state) => state.status)

    const navigate = useNavigate()

    const navItems = [

        {
            name: 'home',
            slug: "/",
            active: true
        },
        {
            name: "login",
            slug: "/login",
            active: !authstatus
        },
        {
            name: "signup",
            slug: "/signup",
            active: !authstatus
        },
        {
            name: "all posts",
            slug: "/all-posts",
            active: authstatus
        },
        {
            name: "add post",
            slug: "/add-post",
            active: authstatus
        },
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/"></Link>
                    </div>

                    <ul>
                        {navItems.map((item) =>

                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={() => navigate(item.slug)}>{item.name}</button>
                                </li>
                            ) : null

                        )}

                        {authstatus && (

                            <li>
                                <Logoutbtn />
                            </li>

                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Header
