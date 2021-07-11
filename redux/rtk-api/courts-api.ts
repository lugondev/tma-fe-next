import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "../../shared/api-url";

export interface CourtType {
    "id": string,
    "country_id": number,
    "court_code": string,
    "court_name": string,
    "created_by": null | number,
    "updated_by": null | null,
    "created_at": null | string,
    "updated_at": null | string,
    "deleted_at": null | string
}


// Define a service using a base URL and expected endpoints
export const courtsApi = createApi({
    reducerPath: 'courtsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getAllCourts: builder.query({
            query: (name) => 'courts/',
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCourtsQuery } = courtsApi