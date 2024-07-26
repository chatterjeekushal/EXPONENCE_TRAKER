

import { configureStore } from "@reduxjs/toolkit";
import song1 from '../assets/song1.mp3';


import playerReducer from "./player";

export const store=configureStore({

    reducer:playerReducer
})