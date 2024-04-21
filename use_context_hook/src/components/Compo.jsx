
import React from 'react'

import { useContext } from 'react'
import { countercountext } from '../context/context'

function Compo() {

    const value=useContext(countercountext)

  return (
    <div>

 compo  is {value.count}

    </div>
  )
}

export default Compo