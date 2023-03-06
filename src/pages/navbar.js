import React from "react";

import { NavLink } from "react-router-dom";
import { totalitems,search} from "./cart/addtocartlogic";
import { useSelector } from "react-redux";
import "./navbar.css"
const Navbar = () => {
const item = useSelector(totalitems)
const filter = useSelector(search)


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-info py-20 shadow-sm" id="navbr">
                <div className="container"  >
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">SHOPPING SITE</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <form class="d-flex">
                                    <input class="form-control me-20" type="search" placeholder="Search" aria-label="Search"/>
                                        <button class="btn btn-outline-success" type="submit">Search {filter}</button>
                                </form>
                            </div>
                        </nav>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                        </ul>
                       
                        <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1" ></i>Cart {item.length}
                            </NavLink>
                            <NavLink to ="/profile" className="pe-5" >
                            <i class="fa fa-user"aria-hidden="true" id="profile">Profile</i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar