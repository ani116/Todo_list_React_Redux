import { configureStore } from '@reduxjs/toolkit'
import ListSlice from './slices/ListSlice'

export default configureStore({
  reducer: {
    list : ListSlice
  },
})