import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout.jsx'
import App from './App.jsx'
import Brand_text from './components/Brand_text.jsx'




const router=createBrowserRouter(


  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>

<Route path='' element={<Brand_text text_1="YOUR FEET" text_2="DESERVE" text_3="THE BEST" image="" />} />

<Route path='/shoes2' element={<Brand_text text_1="BEST TREND" text_2="FOR" text_3="YOU" image="" />} />

<Route path='/shoes3' element={<Brand_text text_1="YOU" text_2="DESERVE" text_3="QUALITY" image="" />} />

<Route path='/shoes4' element={<Brand_text text_1="READY" text_2="TO" text_3="WALK" image="" />} />


    </Route>
  )

)










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />


  </React.StrictMode>,
)
