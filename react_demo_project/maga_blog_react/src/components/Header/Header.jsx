

import React from 'react'
import { Container, Logoutbtn, Logo } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'

function Header() {

  const authstatus = useSelector(state => state.auth.status)
  const navigate = useNavigation()

  const navitems = [
    {
      name: "Home",
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
      name: "allpost",
      slug: "/all-post",
      active: authstatus,
    },
    {
      name: "addpost",
      slug: "/add-post",
      active: authstatus,
    }
  ]

  return (
    <header>
      <Container>
        <nav>

          <div>
            <Link to="/"><Logo/></Link>
          </div>

          <ul>
            {navitems.map((item) =>

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
