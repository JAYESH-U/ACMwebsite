import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    archiveList: [],
};

const archiveSlice = createSlice({
    name: "archives",
    initialState,
    reducers: {
        storeArchives: (state, action) => {
            state.archiveList = action.payload;
        },
        addArchive: (state, action) => {
            state.archiveList.push(action.payload);
        },
        updateArchive: (state, action) => {
            const updatedArchive = action.payload;
            const index = state.archiveList.findIndex((archive) => archive.$id === updatedArchive.$id);

            if (index !== -1) {
                state.archiveList[index] = updatedArchive;
            }
        },
        deleteArchive: (state, action) => {
            const archiveId = action.payload;
            state.archiveList = state.archiveList.filter((archive) => archive.$id !== archiveId);
        },
    },
});

export const { storeArchives, addArchive, updateArchive, deleteArchive } = archiveSlice.actions;

export default archiveSlice.reducer;