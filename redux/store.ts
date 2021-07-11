import { configureStore } from '@reduxjs/toolkit'
import Countries from './slices/countries'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { courtsApi } from './rtk-api/courts-api'

export const store = configureStore({
    reducer: {
        countries: Countries,
        // Add the generated reducer as a specific top-level slice
        [courtsApi.reducerPath]: courtsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(courtsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Notes
// Using configureStore should not need any additional typings.
// You will, however, want to extract the RootState type and the Dispatch type so that they can be referenced as needed.
// Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState}
export type AppDispatch = typeof store.dispatch