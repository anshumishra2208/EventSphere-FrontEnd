import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourites",
    initialState: {
        items: []
    },
    reducers: {
        toggleFavourite(state, action) {

            const event = action.payload;
            const existingEvent = state.items.find((e) => {
                return (e.id || e._id) === (event.id || event._id)
            })

            if (existingEvent) {
                state.items = state.items.filter((e)=>{
                    return (e.id || e._id) !== (event.id || event._id)
                })
            }
             else {
                state.items.push(event);
            }
        },
        removeFavourite(state) {

        },
        clearFavourite(state) {
            state.items = [];
        }
    }
})

export const { toggleFavourite, removeFavourite, clearFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer