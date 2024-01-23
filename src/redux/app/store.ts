import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
// import dashboardReducer from '../features/dashboard/dashboardSlice'
import paginationReducer from '../features/dashboard/paginationSlice'
import layoutReducer from '../features/dashboard/layout/layoutSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            // dashboard: dashboardReducer,
            pagination: paginationReducer,
            layout: layoutReducer,
        },
        middleware: (getDefaultMiddlewares) =>
            getDefaultMiddlewares().concat(apiSlice.middleware),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']