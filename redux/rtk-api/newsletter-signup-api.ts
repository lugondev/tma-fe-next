import {basicApi} from "./basic-api";
import {NewletterSigunupForm} from "../types/newletter-sigunup-form";

// Define a service using a base URL and expected endpoints
export const newsletterSignupApi = basicApi.injectEndpoints({
    endpoints: (builder) => ({
        addNewsletter: builder.mutation<NewletterSigunupForm, Partial<NewletterSigunupForm>>({
            query: (body) => ({
                url: `newsletter/`,
                method: 'POST',
                body,
            })
        }),
    }),
})

// Auto-generated hooks
export const { useAddNewsletterMutation } = newsletterSignupApi

// Possible exports
export const { endpoints, reducerPath, reducer, middleware } = newsletterSignupApi
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.addNewsletter.initiate(), endpoints.addNewsletter.select(), endpoints.addNewsletter.useMutation()
// see `createApi` overview for _all exports_