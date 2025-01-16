import { configureStore } from '@reduxjs/toolkit'
import generalReducer from './slice/general'

export const store = configureStore({
  reducer: { general: generalReducer },
})