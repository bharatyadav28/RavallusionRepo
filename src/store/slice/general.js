import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showProfileCard: false,
  subDetail: false,
  introductoryVideosCount: 0,
  bookmarkCount: 0,
  submoduleId: null,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setShowProfileCard: (state) => {
      state.showProfileCard = !state.showProfileCard;
    },
    setSubDetail: (state, actions) => {
      state.subDetail = actions.payload;
    },
    setIntroductoryVideoscount: (state, actions) => {
      state.introductoryVideosCount = actions.payload;
    },
    setBookmarkCount: (state, actions) => {
      state.bookmarkCount = actions.payload;
    },
    setSubmoduleId: (state,action)=>{
      state.submoduleId = action.payload
    }
  },
})

export const { setShowProfileCard, setSubDetail,setIntroductoryVideoscount,setBookmarkCount ,setSubmoduleId} = generalSlice.actions

export default generalSlice.reducer