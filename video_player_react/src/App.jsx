import { useState } from 'react'

import './App.css'
import Video from './components/Video';
import Manu from './components/Manu';



const videos={

  video1:"https://videos.pexels.com/video-files/5642529/5642529-hd_1920_1080_25fps.mp4",

  video2:"https://videos.pexels.com/video-files/5126550/5126550-uhd_4096_2160_24fps.mp4",

  video3:"https://videos.pexels.com/video-files/5125040/5125040-uhd_4096_2160_24fps.mp4",

  video4:"https://videos.pexels.com/video-files/4887279/4887279-uhd_4096_2160_25fps.mp4"
}


const videoname=  Object.keys(videos);

console.log(videoname);

function App() {
  const [videosrc,setvideosrc] = useState(videos["video1"])


const handelselect=(videodata)=>{

  const videoshow=videos[videodata]

  setvideosrc(videoshow)
}



  return (
    <>

    <Video videosrc={videosrc} />

    <Manu handelselect={handelselect} videoname={videoname} />

    </>
  )
}

export default App
