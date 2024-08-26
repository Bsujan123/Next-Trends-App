import {createSlice} from '@reduxjs/toolkit';


const state = {
    balance:0,
    products:[],
    status:'',
    error:false
}




const cartSlice = createSlice({
    name:'cart',
    initialState:state,
    reducers:{
        addProduct:(state,action) =>{
            state.products.push(action.payload)
            state.balance = state.balance + action.payload.price
        },
        removeProduct:(state,action) =>{
            state.products = action.payload.filteredProducts
            state.balance = state.balance - action.payload.price
        }
    },
    
})

export const { addProduct ,removeProduct} = cartSlice.actions;
export default cartSlice;