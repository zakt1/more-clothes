import {configureStore} from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';


import cartReducer from "./cartRedux";
import postCartReducer from "./orderRedux"



export default configureStore({
    reducer:{
        cart: cartReducer,
        postCart: postCartReducer,
    }
});