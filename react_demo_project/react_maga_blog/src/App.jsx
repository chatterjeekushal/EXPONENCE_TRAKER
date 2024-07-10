import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authservice from './appwright/auth';
import { login, logout } from './store/authSlice';

import './App.css'

import conf from './conf/conf';
import { Fooer, Header } from './components';

function App() {
  const [Loding, setLoding] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {

    authservice.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }))
        }
        else {
          dispatch(logout())
        }
      })

      .finally(() => setLoding(false))

  }, [])



  return !Loding ? (
    <div>

      <div>
        <Header />
        <main>
<h1>hello user</h1>
        </main>
        <Fooer />
      </div>

    </div>


  ) : (
    <div> data loding...</div>
  )

}



export default App
