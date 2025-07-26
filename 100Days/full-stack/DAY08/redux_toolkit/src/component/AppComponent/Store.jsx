import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../Redux/Store/Counterslice'


export const store = configureStore({

    reducer:{
    
        counter: counterReducer,
    },
})

