import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    memberList: []
}

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        storeMemebrs: (state, action) => {
            console.log('storing members', action.payload);
            state.memberList = action.payload;
        },
    }

});

export const { storeMemebrs } = teamSlice.actions;

export default teamSlice.reducer;