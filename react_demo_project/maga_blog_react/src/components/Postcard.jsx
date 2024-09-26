
import React from 'react'
import serviceInstance from '../appwrite/config'
import { Link } from 'react-router-dom'
function Postcard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div>
                <img src={serviceInstance.getFilePreview(featuredImage)} alt="" />
            </div>
            <h3>{title}</h3>
        </div>
    </Link>
  )
}

export default Postcard
