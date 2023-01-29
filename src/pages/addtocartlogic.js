
import { createSlice } from "@reduxjs/toolkit";

export const cartslice=createSlice({
    name:"cart",
    initialState:{
        item : [],
        Filter:""
    },
    reducers:{

       Addtocart :(state,action)=>{
         let check = state.item.findIndex((val)=>val.image == action.payload.image)
         if(check == -1)
         {
            state.item=[...state.item,{
                img:action.payload.image,
                productname:action.payload.title,
                productprice:action.payload.price
             }]
         }
        }
    }

})

export const {Addtocart}=cartslice.actions
export const totalitems=(state)=>state.cart.item
export const search=(state)=>state.cart.Filter
export default cartslice.reducer