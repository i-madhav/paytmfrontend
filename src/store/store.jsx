import { configureStore } from "@reduxjs/toolkit";
import userslice from "../storeslice/userslice";

const store = configureStore({
    reducer:{
        userData: userslice
    }
});

export default store;