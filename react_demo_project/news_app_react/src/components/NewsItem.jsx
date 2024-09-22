
import React from 'react'

function Newsitem(props) {

    let {
        desc, title, imageURL,
        newsUrl, sourceName,catagoty
    } = props;
  return (
    <div>
        <h1>{catagoty}</h1>
    <div className="card my-3 shadow-md rounded-lg overflow-hidden">
        <img src={imageURL} className="w-full h-48 object-cover" alt="news" />
        <div className="p-4">
            <h5 className="text-lg font-semibold">{title}</h5>
            <p className="text-sm text-gray-500 text-end">
                - {sourceName}
            </p>
            <p className="text-gray-700">{desc}</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm mt-2">
                Read More...
            </a>
        </div>
    </div>
</div>

  )
}

export default Newsitem
