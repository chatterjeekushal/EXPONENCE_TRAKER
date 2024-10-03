
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    tranjasans: {

        status: false,
        userData: null
    }
}



export const tranjasanSlice = createSlice({

    name: "tranjasan",
    initialState,
    reducers: {

        login: (state, action) => {

            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state, action) => {
            state.status = false;
            state.userData = null;

        }
    }
})


export const { login, logout } = tranjasanSlice.actions

export default tranjasanSlice.reducer