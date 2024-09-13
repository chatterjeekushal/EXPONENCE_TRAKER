
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    tranjasans: [

        { id: 1, text: "bonas", amount: 500 },
        { id: 2, text: "rent", amount: 100 },
        { id: 3, text: "momoes", amount: -200 }
    ]

}



export const tranjasanSlice = createSlice({

    name: "tranjasan",
    initialState,
    reducers: {

        addTranjasan: (state,action) => {

            const  expence_data = action.payload;

            // Log to ensure values are received correctly
            console.log(expence_data);
            
            

const tranjasan={
    id:nanoid(),
    text:expence_data.input,
    amount:expence_data.expance,

}

state.tranjasans.push(tranjasan)

        },


        removeTranjasan: (state,action) => {

state.tranjasans=state.tranjasans.filter((tran)=>tran.id!==action.payload)

        }
    }
})


export const {addTranjasan,removeTranjasan}=tranjasanSlice.actions

export default tranjasanSlice.reducer