
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
        ,
         removefromcart :(state,action)=>{
            state.item=state.item.filter(val=>val.id != action.payload)
         }
       
        }
    }

)

export const {Addtocart,removefromcart}=cartslice.actions
export const totalitems=(state)=>state.cart.item
export const search=(state)=>state.cart.Filter
export default cartslice.reducer