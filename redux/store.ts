import { configureStore } from '@reduxjs/toolkit'
import Countries from './slices/countries'

export const store = configureStore({
    reducer: {
        countries: Countries
    },
})

// Notes
// Using configureStore should not need any additional typings.
// You will, however, want to extract the RootState type and the Dispatch type so that they can be referenced as needed.
// Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState}
export type AppDispatch = typeof store.dispatch