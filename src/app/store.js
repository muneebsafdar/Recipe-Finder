import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "../ReceipeFinderSlice/AuthSlice";

const store = configureStore({
    reducer: AuthReducers
})

export default store;