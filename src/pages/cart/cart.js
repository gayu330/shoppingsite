import React from "react";

import { totalitems } from "../cart/addtocartlogic";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from '../cart/counter'
import './cart.css'
import Footer from "../footer";
import { removefromcart } from"../cart/addtocartlogic";
function Cart() 
{

    const items = useSelector(totalitems)
    console.log(items);
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    return (
    
        <div className='cart-main'>
            {
                items.length === 0 ?
                    <img src='https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg' />
                    :
                    items.map((val) => {

                        return (
                            <>

                                <ul className='cart-sep'>
                                    <li>
                                        <img src={val.img} height="300" />
                                        <div>
                                            <h1>${val.productprice}.00</h1>
                                            <h1>{val.productname}</h1>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>quantity</h4>
                                        <div className='cart-sep-btn'>
                                            <button
                                                className='btn btn-primary'
                                                onClick={() => dispatch(decrement())}
                                                disabled={count === 0 ? true : false}
                                            >-</button>
                                            <p>{count}</p>
                                            <button className='btn' onClick={() => dispatch(increment())}>+</button>
                                        </div>
                                    </li>
                                    <span
                                        class="material-symbols-outlined icon"
                                        onClick={() => dispatch(removefromcart(val.id))}>
                                        REMOVE
                                    </span>
                                </ul>
                            </>
                        )


                    })
            }


        </div>
    
    )
}


 export default Cart