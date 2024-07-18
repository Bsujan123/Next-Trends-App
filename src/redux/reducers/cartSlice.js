import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


const state = {
    balance:0,
    products:[],
    status:'',
    error:false
}

export const productData = createAsyncThunk('user/cart',async(id)=>{
    try{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        return data
    }catch(error){
        throw error
    }
    
})


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
    extraReducers:(builder)=>{
        builder.addCase(productData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(productData.fulfilled,(state,action)=>{
            state.status = "completed"
            state.products = action.payload
        })
        .addCase(productData.rejected,(state,action)=>{
            state.status = "rejected"
            state.products = []
            state.error = action.error.message
        })
    },
})

export const { addProduct ,removeProduct} = cartSlice.actions;
export default cartSlice;