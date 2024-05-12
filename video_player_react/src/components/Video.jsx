import React from 'react'

function Video({videosrc}) {
    return (
        <div>

<video loop controls autostart="true" autoPlay muted src={videosrc}  />

        </div>
    )
}

export default Video
