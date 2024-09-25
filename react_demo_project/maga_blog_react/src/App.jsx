import { useEffect, useState } from 'react'

import './App.css'
import { useDispatch } from 'react-redux'

import authservice from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL); // access env variable

  const [loding, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    authservice.getCurrentUser()
      .then((userdata) => {

        if (userdata) {
          dispatch(login({ userData: userdata }))
        }
        else {
          dispatch(logout())
        }
        setLoding(false)
      })
      .finally(() => setLoding(false))

  }, [])

  return !loding ? (

    <div className="App">
      hello
      <div>

        <Header />

        <main>
          {/* outlate */}
        </main>

        <Footer />

      </div>


    </div>

  ) : null
}

export default App
