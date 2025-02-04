import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signinEmail:"",
    userId:"",
    isNewUser:false,
    keepMeSignedIn:false
}

export const signInState = createSlice({
    name:"signInState",
    initialState,
    reducers: {
        setSigninEmail: (state, action) => {
            state.signinEmail = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setIsNewUser: (state, action) => {
            state.isNewUser = action.payload;
        },
        setkeepMeSignedIn: (state, action) => {
            state.keepMeSignedIn = action.payload;
        }
    }
})

export const {setSigninEmail,setUserId,setIsNewUser,setkeepMeSignedIn} = signInState.actions;

export default signInState.reducer