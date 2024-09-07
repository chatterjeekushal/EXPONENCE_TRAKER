
import React from 'react'

import appwrightService from "../appwright/config"

import {Link} from "react-router-dom"

function PostCard({$id,title,featuredImage}) {
  return (
    
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={`${appwrightService.get_file_preview(featuredImage)}`} alt={title} className="rounded-xl"></img>
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
