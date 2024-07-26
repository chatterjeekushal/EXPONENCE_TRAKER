import { useState } from 'react'
import logo from './assets/song1.mp3'
import {useDispatch,useSelector } from 'react-redux'
import {play_s} from "./store/player"



import './App.css'

function App() {

  const play_song=useSelector(state=>state.play_song)

  const play_song_handaler=()=>{

    console.log("hello");



const data=play_song.song
console.log(data);
const audio=new Audio(logo)

audio.play()

  }
  

  return (
    <>

<h1>music</h1>
<h1>{reactLogo}</h1>

<button onClick={play_song_handaler}>play</button>
<button>pause</button>

    </>
  )
}

export default App
