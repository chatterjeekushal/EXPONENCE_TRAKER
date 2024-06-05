import React from 'react'

import Nav from './components/Nav'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>

            <Nav />

            <Outlet />

        </>
    )
}

export default Layout
