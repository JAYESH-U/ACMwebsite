import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import eventSlice from './eventSlice';
import teamSlice from './teamSlice';
import archiveSlice from './archiveSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        events: eventSlice,
        team: teamSlice,
        archives: archiveSlice,
        //TODO: add more slices here for posts
    }
});

export default store;