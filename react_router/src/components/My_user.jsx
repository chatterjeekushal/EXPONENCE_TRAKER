import React from 'react'

import { useParams } from 'react-router-dom'

function My_user() {

    const params=useParams()

  return (
    <div>
 my user data {params.data}

    </div>
  )
}

export default My_user