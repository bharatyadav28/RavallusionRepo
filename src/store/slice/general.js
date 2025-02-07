import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showProfileCard: false,
  subDetail: false,
  introductoryVideosCount: 0,
  BookmarkCount: 0
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
      state.BookmarkCount = actions.payload;
    },
  },
})

export const { setShowProfileCard, setSubDetail,setIntroductoryVideoscount,setBookmarkCount } = generalSlice.actions

export default generalSlice.reducer