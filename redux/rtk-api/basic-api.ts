import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "../../shared/api-url";

// initialize an empty api service that we'll inject using (injectEndpoints) endpoints into later as needed
export const basicApi = createApi({
    reducerPath: 'api', //Defaults to 'api'
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Courts'],
    endpoints: () => ({}),
})