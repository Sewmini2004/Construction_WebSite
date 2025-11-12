import React, { useEffect, useState } from 'react';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import ServiceImg from '../../assets/images/construction10.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AvatarImg from '../../assets/images/author-2.jpg';
import { Pagination } from "swiper/modules";
import About from '../common/About.jsx';
import { apiurl, token } from '../common/https';
import LatestServices from '../common/LatestServices.jsx';
import LatestProjects from '../common/LatestProjects.jsx';
import LatestArticles from '../common/LatestArticles.jsx';
import ShowTestimonial from '../common/ShowTestimonial.jsx';

const Home = () => {
    
  return (
        <>
            <Header/>
        <main>  
            
                {/* Hero Section */}
            <section className="section-1 ">
                <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                  <span>Welcome Amazing Constructions</span> 
                            <h1>Crafting dreams with <br/> precision and excellence.</h1>  
                            <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br/>  
                                attention to detail. With years of experience and a dedication to quality.</p>
                            <div className="mt-3">
                                <a className="btn btn-primary large">Contact Now</a>
                            <a className="btn btn-secondary ms-2 large">View Projects</a>
                             </div>   
                          
                            </div>
                            
                    </div>
                </div>
                </section>  

                {/* About Us Section */}
                <About/>
          
                {/* Our Services Section */}
        <LatestServices/>
                {/* Why Choose Us Section */}

                <section className="section-4 py-5">
                    <div className='container py-5'>
                    <div className="section-header text-center">
                            <span>Why Choose Us</span>
                            <h2>Discover our wide variety of projects.</h2>
                            <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
                          
                        </div>

                        <div className='row pt-4'>
                            <div className='col-md-4 '>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>

                                        <img src={Icon1} alt="" />
                                        <div className='card-title mt-3'>
                                            <h3>Cutting-Edge Solutions</h3>
                                        </div>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>

                            </div>
                        

                            <div className='col-md-4 '>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>

                                        <img src={Icon2} alt="" />
                                        <div className='card-title mt-3'>
                                            <h3>Cutting-Edge Solutions</h3>
                                        </div>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>

                            </div>


                            <div className='col-md-4 '>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>

                                        <img src={Icon3} alt="" />
                                        <div className='card-title mt-3'>
                                            <h3>Cutting-Edge Solutions</h3>
                                        </div>
                                        <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>






                 {/* Our projects Section */}
               <LatestProjects/>


                

             
              <LatestArticles/>


            <ShowTestimonial/>


            </main>
            <Footer/>
        </>
    
    );
}

export default Home;
