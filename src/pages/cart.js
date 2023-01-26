import React from "react";
import Navbar from "./navbar";
import { totalitems } from "./addtocartlogic";
import { useSelector } from "react-redux";
import './cart.css'
import Footer from "./footer";
function Cart() {

    const items = useSelector(totalitems)
    console.log(items);
    return (
        <>
            <Navbar/>
            {
                items.map((val) => {
                    return (
                        <div className="cart-sep">
                            <img src={val.img} height="300" />
                            <div>
                                <h1>${val.productprice}.00</h1>
                                <h1>{val.productname}</h1>
                            </div>

                        </div>
                    )
                })
            }
<Footer/>
        </>
    )
}

export default Cart