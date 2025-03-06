import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videosLock: [],
};  
export const videoLock = createSlice({
    name: "videoLock",
    initialState,    
    reducers: {
        setVideosLock: (state, action) => {
            
        },        
    },
});

export const { setVideoLock } = videoLock.actions;
