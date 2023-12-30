import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventList: []
}

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        storeEvents: (state, action) => {
            console.log('storing events', action.payload);
            state.eventList = action.payload;
        },
    }

});

export const { storeEvents } = eventSlice.actions;

export default eventSlice.reducer;