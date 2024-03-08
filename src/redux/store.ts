import typeReducer from '@/redux/api/type'
import schemaReducer from '@/redux/api/schema'
import contentReducer from '@/redux/api/content'

import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '@/redux/ui/dashboard'

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    content: contentReducer,
    schema: schemaReducer,
    type: typeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
