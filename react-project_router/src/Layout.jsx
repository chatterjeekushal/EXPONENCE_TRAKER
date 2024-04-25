
import React from 'react'
import Headcom from './components/Headcom'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>

            <Headcom />

            <Outlet/>

            <Footer />

        </>
    )
}

export default Layout