import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [ipdetails, setipdetails] = useState({})
  const [lat, setlat] = useState(22.5726)

  const [lon, setlon] = useState(88.3832)


  // Fetching the API once when the 
  // component is mounted 


  const fetch_api = async () => {

    const ip_api = await fetch('https://ipapi.co/json/')

    const responce = await ip_api.json()

    setipdetails(responce)
  }

  useEffect(() => {

    fetch_api()

  }, [])



  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipdetails.ip}</h1>
          <h4>Approximate location: </h4>

          <p>{ipdetails.city}, {ipdetails.region},
            {ipdetails.country_name}.</p>


          <h4>Internet Service Provider(ISP):</h4>

          <p>{ipdetails.org}</p>

        </div>
        
      </div>



    </>
  )
}

export default App
