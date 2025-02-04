import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './slice/general'
import signInState  from './slice/signInStates'
import { authApi } from './Api/auth'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    general: generalReducer,
    signInState: signInState,

    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),

})

setupListeners(store.dispatch)