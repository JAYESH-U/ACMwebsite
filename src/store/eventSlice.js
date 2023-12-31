// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     eventList: []
// }

// const eventSlice = createSlice({
//     name: "events",
//     initialState,
//     reducers: {
//         storeEvents: (state, action) => {
//             console.log('storing events', action.payload);
//             state.eventList = action.payload;
//         },
//     }

// });

// export const { storeEvents } = eventSlice.actions;

// export default eventSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventList: [],
};

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        storeEvents: (state, action) => {
            state.eventList = action.payload;
        },
        addEvent: (state, action) => {
            state.eventList.push(action.payload);
        },
        updateEvent: (state, action) => {
            const updatedEvent = action.payload;
            const index = state.eventList.findIndex((event) => event.$id === updatedEvent.$id);

            if (index !== -1) {
                state.eventList[index] = updatedEvent;
            }
        },
        deleteEvent: (state, action) => {
            const eventId = action.payload;
            state.eventList = state.eventList.filter((event) => event.$id !== eventId);
        },
    },
});

export const { storeEvents, addEvent, updateEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
