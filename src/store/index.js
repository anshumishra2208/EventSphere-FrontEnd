import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteSlice";

const store = configureStore({
    reducer :{
        favouriteSection : favouriteReducer
    }
});

export default store;