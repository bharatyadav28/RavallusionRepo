import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './slice/general'
import signInState from './slice/signInStates'
import { authApi } from './Api/auth'
import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from './Api/home'
import { introAndBookmarkApi } from './Api/introAndBookmark'
import { courseApi } from './Api/course'
import { commentsApi } from './Api/comments'

export const store = configureStore({
  reducer: {
    general: generalReducer,
    signInState: signInState,

    [authApi.reducerPath]: authApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [introAndBookmarkApi.reducerPath]: introAndBookmarkApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
      .concat(homeApi.middleware)
      .concat(introAndBookmarkApi.middleware)
      .concat(courseApi.middleware).concat(commentsApi.middleware),

})

setupListeners(store.dispatch)