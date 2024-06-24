


import { useState } from 'react'

import './App.css'

import { Priceprovider } from './context/Price'
import Pricebtn from './components/Pricebtn'
import Card from './components/Card'

function App() {
  

const [price, setprice] = useState("500")

const [cardtext, setcardtext] = useState("java script")

const smallprice=()=>{

  setprice("500")
}

const middleprice=()=>{

  setprice("1000")
}

const largeprice=()=>{

  setprice("2000")

}



  return (


    <Priceprovider value={{price,smallprice,middleprice,largeprice,cardtext,setcardtext}}>

<div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

            <Pricebtn/>

          </div>

          <div className="w-full max-w-sm mx-auto">

            <Card/>

          </div>
        </div>
      </div>


    </Priceprovider>
  )
}

export default App
