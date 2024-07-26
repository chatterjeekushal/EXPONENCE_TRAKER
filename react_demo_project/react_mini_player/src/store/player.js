

import {createSlice,nanoid} from "@reduxjs/toolkit"
import logo from '../assets/song1.mp3';

const songvalue=``

const initialState={

    play_song:{id:1,song:{song1},song_name:"snap"}
}


export const player_slice=createSlice({

    name:"song",
    initialState,
    reducers:{

        play_s:(state,action)=>{

            const song_to_play=state.play_song[0].song;

            const audio=new Audio(logo);

            audio.play();
        },

        pause_s:(state,action)=>{

            const song_to_play=state.play_song[0].song;

            const audio=new Audio(logo);

            audio.pause();
        }
    }
})


// Exporting actions generated from the slice
export const { play_s, pause_s } = player_slice.actions;

export default player_slice.reducer;