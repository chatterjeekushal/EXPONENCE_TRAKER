

import Navbar from './components/Navbar'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './components/Home'

import Login from './components/Login'


import My_user from './components/My_user'


function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <> <Navbar/> <Home/> </>

    },

    {

      path: "/login",

      element: <> <Navbar /> <Login/> </>
    },

    {

      path: "/my_user/:data",

      element: <> <Navbar /> <My_user/> </>
    },
 

    

  ])


  return (
    <>

      

<RouterProvider router={router}/>

    </>
  )
}

export default App
