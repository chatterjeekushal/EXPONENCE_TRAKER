import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar_1 from './components/Navbar_1'
import Navbar_2 from './components/Navbar_2'
import News from './components/News'
import Newsitem from './components/Newsitem'
import { BrowserRouter, Route, Routes } 
    from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <div className="App">
                <BrowserRouter>
                    <Navbar_1 />
                    <Navbar_2/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <News key="general"
                                            category="general" />}
                                    />
                                    <Route
                                        path="/Entertainment"
                                        element={
                                            <News key="entertainment"
                                            category="entertainment" />
                                        }
                                    />
                                    <Route
                                        path="/Technology"
                                        element={
                                            <News key="technology"
                                            category="technology" />}
                                    />
                                    <Route
                                        path="/Sports"
                                        element={
                                            <News key="sports"
                                            category="sports" />}
                                    />
                                    <Route
                                        path="/Business"
                                        element={
                                            <News key="business"
                                            category="business" />}
                                    />
                                    <Route
                                        path="/Health"
                                        element={
                                            <News key="health"
                                            category="health" />}
                                    />
                                    <Route
                                        path="/Science"
                                        element={
                                            <News key="science"
                                            category="science" />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>

    </>
  )
}

export default App
