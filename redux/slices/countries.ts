import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//Type of data we are expecting from the api
export interface CountryType {
    "id": number,
    "iso": string,
    "name": string,
    "nicename": string,
    "iso3": string,
    "numcode": number,
    "phonecode": number,
    "created_by"?: null | number,
    "updated_by"?: null | number,
    "created_at"?: null | string,
    "updated_at"?: null | string,
    "deleted_at"?: null | string
}

export interface CountryState {
    isLoading: boolean,
    errorMessage: null | string,
    countries: CountryType[]
}

const initialState: CountryState = {
    isLoading: true,
    errorMessage: null,
    countries: []
}

const countries_slice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        // createSlice looked at all of the functions that were defined in the reducers field,
        // and for every "case reducer" function provided, generates an action creator that uses the name of the reducer as the action type itself.
        // So, the addCountries reducer became an action type of "countries/addCountries",
        // and the addCountries() action creator will return an action with that type.

        // Use the PayloadAction type to declare the contents of `action.payload`
        addCountries(state, action: PayloadAction<CountryState>){
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes

            state.isLoading = false;
            state.countries = action.payload.countries;
            state.errorMessage = null;
        },
        countriesLoading(state){
            state.isLoading = true;
            state.countries = [];
            state.errorMessage = null;
        },
        countriesFailed(state, action: PayloadAction<CountryState>){
            state.isLoading = false;
            state.countries = [];
            state.errorMessage = action.payload.errorMessage;
        }
    }
});

// Extract the action creators object and the reducer
const { actions, reducer } = countries_slice
// Extract and export each action creator by name
export const { addCountries, countriesLoading, countriesFailed } = actions
// Export the reducer, either as a default or named export
export default reducer
