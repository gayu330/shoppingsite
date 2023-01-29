import {configureStore} from  "@reduxjs/toolkit"

import  cartslice  from "../addtocartlogic"
export default configureStore({
    reducer:{
    cart:cartslice

    }
})