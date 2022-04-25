import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';
import axios from "axios";

// postCartSlice

const postURL = "https://localhost:5000/api/orders/";
export const postCartOrder = createAsyncThunk('postCartorder/addOrder', async (cartItems, {getState}) => {
    const { cart } = getState()
    const prods = cart.products
    console.log(prods, '<< prods getState thunk')
    
    // return fetch(axios.get(postURL, prods))
    const response = await axios.post(postURL, cartItems)
    return response.data


})

const postCartSlice = createSlice({
    name: 'orderCart',
    initialState: {
        products:[],
        status: null,
    
    },
    extraReducers: {
        [postCartOrder.pending]: (state, action) => {
            state.status = 'loading'
        },
        [postCartOrder.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = 'success'
        },
        [postCartOrder.rejected]: (state, action) => {
            state.status = 'failed'
        },

    }

}) 


export const { addCheckout } = postCartSlice.actions
export default postCartSlice.reducer;