import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './slice/general'
import signInState from './slice/signInStates'
import { authApi } from './Api/auth'
import { setupListeners } from '@reduxjs/toolkit/query'
import { homeApi } from './Api/home'
import { introAndBookmarkApi } from './Api/introAndBookmark'
import { courseApi } from './Api/course'

export const store = configureStore({
  reducer: {
    general: generalReducer,
    signInState: signInState,

    [authApi.reducerPath]: authApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [introAndBookmarkApi.reducerPath]: introAndBookmarkApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
      .concat(homeApi.middleware)
      .concat(introAndBookmarkApi.middleware)
      .concat(courseApi.middleware)

})

setupListeners(store.dispatch)