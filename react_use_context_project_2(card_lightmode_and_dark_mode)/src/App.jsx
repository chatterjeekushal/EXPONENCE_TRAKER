import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/Them'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {

  const [thememode, setthememode] = useState("light")
  const [thememodename, setthememodename] = useState("Light Mode")

  const lightTheme = () => {

    setthememode("light")
  }

  const darkTheme = () => {

    setthememode("dark")
  }



  // actual change in theme


  useEffect(() => {
  
    document.querySelector('html').classList.remove("light","dark")

    document.querySelector("html").classList.add(thememode)

  }, [thememode])
  




  return (

    <ThemeProvider value={{ thememode, lightTheme, darkTheme,thememodename,setthememodename }}>


      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            <ThemeButton/>

          </div>

          <div className="w-full max-w-sm mx-auto">

            <Card/>

          </div>
        </div>
      </div>

    </ThemeProvider>

  )
}

export default App
