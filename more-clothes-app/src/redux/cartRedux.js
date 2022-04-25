import {createSlice} from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';

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
    }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;