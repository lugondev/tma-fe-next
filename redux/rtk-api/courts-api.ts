import {basicApi} from "./basic-api";

export interface CourtType {
    "id": number,
    "country_id": number,
    "court_code": string,
    "court_name": string,
    "created_by": null | number,
    "updated_by": null | number,
    "created_at": null | string,
    "updated_at": null | string,
    "deleted_at": null | string
}

// Define a service using a base URL and expected endpoints
export const courtsApi = basicApi.injectEndpoints({
    endpoints: (builder) => ({
        //                       ResultType  QueryArg
        //                             v         v
        getAllCourts: builder.query<CourtType[], void>({
            // inferred as `number` from the `QueryArg` type
            //      v
            query: () => 'courts/',
        }),
        addCourt: builder.mutation<CourtType, Partial<CourtType>>({
            query: (body) => ({
                url: `courts/`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Courts'],
        }),
    }),
})

// Auto-generated hooks
export const { useGetAllCourtsQuery, useAddCourtMutation } = courtsApi

// Possible exports
export const { endpoints, reducerPath, reducer, middleware } = courtsApi
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getAllCourts.initiate(), endpoints.getAllCourts.select(), endpoints.getAllCourts.useQuery()
// endpoints.addCourt.initiate(), endpoints.addCourt.select(), endpoints.addCourt.useMutation()
// see `createApi` overview for _all exports_