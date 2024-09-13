
import { configureStore } from "@reduxjs/toolkit";

import tranjasanReducer from "../features/tranjasan/Tranjasan";

export const store = configureStore({
    reducer:tranjasanReducer
})