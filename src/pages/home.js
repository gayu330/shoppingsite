import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Products from "./products";

const Home = () => {
   
        return (
            <div>
            <Carousel>
                <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid "
                            src="https://img.freepik.com/free-vector/template-banner-online-store-with-shopping-cart-with-purchases-boxes-delivery-from-supermarket-vector-illustration_548887-104.jpg?size=626&ext=jpg&ga=GA1.2.1133880596.1674738263"
                            alt="First slide"
                            height="5px"
                        />
                



                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100 img-fluid"
                        src="https://thumbs.dreamstime.com/b/online-shopping-landing-page-banner-concept-mobile-app-template-vector-illustration-flat-design-online-shopping-landing-page-127220971.jpg"
                        alt="Second slide"
                    />



                </Carousel.Item>
                <Carousel.Item>
                     <img
                        className="d-block w-100 img-fluid"
                        src="https://cdn3.vectorstock.com/i/1000x1000/12/52/men-accessories-horizontal-banner-set-vector-18161252.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Products/>
           </div>  
        );
    }


export default Home;