import {configureStore} from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';


import cartReducer from "./cartRedux";


export default configureStore({
    reducer:{
        cart: cartReducer,
    }
});