import { configureStore } from "@reduxjs/toolkit";
import userslice from './UseReducer'


export const Stor = configureStore({
    
    reducer : {
        products : userslice
    }

})