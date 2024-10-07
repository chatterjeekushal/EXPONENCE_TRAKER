import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tranjasans: {
        status: false,
        userData: {},
        tranjashan_data:[],
        userblanace: 0
          
    }
};

export const tranjasanSlice = createSlice({
    name: "tranjasan",
    initialState,
    reducers: {
        login: (state, action) => {
            state.tranjasans.status = true;
            state.tranjasans.userData = action.payload.userData;
            console.log(state.tranjasans.userData);
            
        },
        
        logout: (state) => {
           
            state.tranjasans.status = false;
            state.tranjasans.userData = {};
        },

        addTranjashan: (state, action) => {
            // Assuming action.payload is an object to be added to exponence
           

            state.tranjasans.tranjashan_data=action.payload;
        
            console.log("state.tranjasans.tranjashan_data", state.tranjasans.tranjashan_data);
        }

       
    }
});

export const { login, logout, addTranjashan,} = tranjasanSlice.actions;

export default tranjasanSlice.reducer;
