import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Products from "./products";
import  "./home.css"

const Home = () => {
   
        return (
            <div>
            <Carousel>
                <Carousel.Item >
                        <img
                            class="slider"
                            className="d-block w-100 img-fluid "
                            src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?size=626&ext=jpg"
                            alt="First slide"
                            height="5px"
                        />
                



                </Carousel.Item>
                <Carousel.Item>
                     <img
                        class="slider"
                        className="d-block w-100 img-fluid"
                        src="https://img.freepik.com/free-psd/modern-sales-banner-template_23-2148995448.jpg?size=626&ext=jpg&ga=GA1.2.2051288435.1675056709"
                        alt="Second slide"
                    />



                </Carousel.Item>
                <Carousel.Item>
                     <img
                        class="slider"
                        className="d-block w-100 img-fluid"
                        src="https://img.freepik.com/free-psd/fashion-store-template-banner_23-2148707242.jpg?size=626&ext=jpg&ga=GA1.1.2051288435.1675056709&semt=sph"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Products/>
           </div>  
        );
    }


export default Home;