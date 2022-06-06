import React from 'react';
import { Button } from 'react-bootstrap';
import { FaApple, FaFacebookF } from "react-icons/fa";
import Events from '../Events/Events';
import './Home.css'

const Home = () => {
    return (
        <main>
            <section className='banner py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="me-5">
                            <div className="banner-content text-center shadow-sm align-center">
                                <h2 style={{ color: "#1E0A3C", fontSize: "52px" }} className='mb-3 fw-bolder text-capitalize'>North Bangla
                                    <br />
                                    <span style={{ color: "#1E0A3C" }}>Foundation</span></h2>
                                <h6 style={{ color: "#6F7287" }} >Hosted by 17 events</h6>
                                <h6 style={{ color: "#6F7287" }} >500 followers</h6>
                                <Button variant="outline-primary" className='mt-2 px-3 ' >Follow</Button>
                                <p style={{ color: "#6F7287" }} className='mt-2 px-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque, consequatur quod aliquid, asperiores sint dolor magni voluptates, veritatis vel quo ab dignissimos autem perspiciatis placeat molestias? Esse modi ea numquam animi maxime obcaecati perferendis nemo, ullam nam, illum suscipit saepe quod, facilis laudantium explicabo quam rerum odio ut nobis?
                                </p>
                                <div className='d-flex mt-3 text-center'>
                                    <FaFacebookF className='facebook-icon me-5' />
                                    <FaApple className='apple-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Events></Events>
        </main>
    );
};

export default Home;