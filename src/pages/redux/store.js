import {configureStore} from  "@reduxjs/toolkit"

import  cartslice  from "../cart/addtocartlogic"
import counter from "../cart/counter"
import profilelogic from "../profile/profilelogic"
export default configureStore({
    reducer:{
    cart:cartslice ,
    counter:counter,
    profile:profilelogic
    }
})