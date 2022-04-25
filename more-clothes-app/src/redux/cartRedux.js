import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';
import axios from "axios";



    const cartSlice = createSlice({
        name: "cart",
        initialState:{
            products:[],
            cartQuantity:0,
            total: 0,
            
        },
        reducers: {
            addProduct:(state, action) => {
                state.cartQuantity += 1;
                state.products.push(action.payload);
                state.productQuant += action.payload.prodQuantity;
                state.total += action.payload.price * action.payload.prodQuantity;
            },
        },
        extraReducers: {
                [postCart1.pending]: (state, action) => {
                    state.status = 'loading'
                },
                [postCart1.fulfilled]: (state, action) => {
                    state.list = action.payload;
                    state.status = 'success'
                },
                [postCart1.rejected]: (state, action) => {
                    state.status = 'failed'
                },
        }
    })



export const { addProduct, postCart } = cartSlice.actions

export default cartSlice.reducer;