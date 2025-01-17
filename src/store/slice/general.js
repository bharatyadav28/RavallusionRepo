import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showProfileCard: false,
  subDetail: false,

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
  },
})

export const { setShowProfileCard, setSubDetail } = generalSlice.actions

export default generalSlice.reducer