// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     memberList: []
// }

// const teamSlice = createSlice({
//     name: "team",
//     initialState,
//     reducers: {
//         storeMemebrs: (state, action) => {
//             console.log('storing members', action.payload);
//             state.memberList = action.payload;
//         },
//     }

// });

// export const { storeMemebrs } = teamSlice.actions;

// export default teamSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    memberList: [],
};

const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        storeMembers: (state, action) => {
            state.memberList = action.payload;
        },
        addMember: (state, action) => {
            state.memberList.push(action.payload);
        },
        updateMember: (state, action) => {
            const updatedMember = action.payload;
            const index = state.memberList.findIndex((member) => member.$id === updatedMember.$id);

            if (index !== -1) {
                state.memberList[index] = updatedMember;
            }
        },
        deleteMember: (state, action) => {
            const memberId = action.payload;
            state.memberList = state.memberList.filter((member) => member.$id !== memberId);
        },
    },
});

export const { storeMembers, addMember, updateMember, deleteMember } = teamSlice.actions;

export default teamSlice.reducer;