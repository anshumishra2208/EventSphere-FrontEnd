import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourites",
    initialState: {
        name: "anshu",
        age: 19
    },
    reducers: {
        toggleFavourite(state, action) {
            state.name = action.payload
        },
        removeFavourite(state) {

        },
        clearFavourite(state) {

        }
    }
})

export const { toggleFavourite, removeFavourite, clearFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer