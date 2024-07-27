import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userData",
    initialState:{
        user:{}
    },
    reducers:{
        storeuser : (state , action) => {
            state.user = action.payload;
        }
    }
});


export const {storeuser} = userSlice.actions;
export default userSlice.reducer;