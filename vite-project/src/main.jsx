import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import My_app from "./my_app"




function MY_project(){

  return(
    <div>

<h1>custom app %</h1>

    </div>
  )
}


const anather_element=(

  <a href='https://google.com' target='_blank'>visit google</a>
)


const react_element=React.createElement(


  'a',
  {href:'https://google.com',target:'_blank'},

  'click me to visit google'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <My_app />

    <App />


    
    <MY_project/>


    {/* i call anather_element function but remove react strict tag */}

  </React.StrictMode>,

  
)



// ReactDOM.createRoot(document.getElementById('root')).render(


//   react_element

// )
