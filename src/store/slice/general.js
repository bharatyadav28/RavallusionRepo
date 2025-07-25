import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  planId: null,
  planType: null,
  planPrice: null,
  usdPrice:null,
  isIndia: true,
  introductoryVideosCount: 0,
  bookmarkCount: 0,
  submoduleId: null,
  courseId: null,
  updatedPercentageWatched: 0,
  videoIdOfCurrentVideo: null,
  firstVideoId: null,
  searchValue: " ",
  searchHistory: [],
  videoTitle: "",
  paymentSuccess:false,
   sidebarTabIndex: 0,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
      setSidebarTabIndex: (state, action) => {
    state.sidebarTabIndex = action.payload;
  },
    setPlanId: (state, actions) => {
      state.planId = actions.payload;
    },
    setPlanType: (state, actions) => {
      state.planType = actions.payload;
    },
    setPlanPrice: (state, actions) => {
      state.planPrice = actions.payload;
    },
    setUsdPrice: (state, actions) => {
      state.usdPrice = actions.payload;
    },
    setIsIndia:(state, actions) => {
      state.isIndia = actions.payload;
    },
    setIntroductoryVideoscount: (state, actions) => {
      state.introductoryVideosCount = actions.payload;
    },
    setBookmarkCount: (state, actions) => {
      state.bookmarkCount = actions.payload;
    },
    setSubmoduleId: (state, action) => {
      state.submoduleId = action.payload
    },
    setCourseId: (state, action) => {
      state.courseId = action.payload
    },
    setUpdatedPercentageWatched: (state, action) => {
      state.updatedPercentageWatched = action.payload
    },
    setVideoIdOfcurrentVideo: (state, action) => {
      state.videoIdOfCurrentVideo = action.payload
    },
    setFirstVideoId: (state, action) => {
      state.firstVideoId = action.payload
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setSearchHistory: (state, action) => {
      state.searchHistory = action.payload
    },
    setVideoTitle: (state, action) => {
      state.videoTitle = action.payload
    },
    setPaymentSuccess: (state, action) => {
      state.paymentSuccess = action.payload
    }
  },
})

export const { setVideoIdOfcurrentVideo,setVideoTitle, setPaymentSuccess,
  setSearchValue,
  setSearchHistory,
  setIsIndia,
  setUpdatedPercentageWatched,
  setSidebarTabIndex,
  setCourseId,
  setFirstVideoId, setPlanId, setPlanPrice, setPlanType,setUsdPrice, setIntroductoryVideoscount,
  setBookmarkCount, setSubmoduleId } = generalSlice.actions

export default generalSlice.reducer