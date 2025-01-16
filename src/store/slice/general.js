import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showProfileCard: false,

}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setShowProfileCard: (state) => {
      state.showProfileCard = !state.showProfileCard;
    },
  },
})

export const { setShowProfileCard } = generalSlice.actions

export default generalSlice.reducer