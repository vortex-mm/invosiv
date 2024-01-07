import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '@/redux/ui/dashboard'

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
