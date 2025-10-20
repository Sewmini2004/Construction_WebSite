import React from 'react';  
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
                <section className="section-3 py-5 bg-light">
                    <div className="container-fluid">
                        <div className="section-header text-center">
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space, or maintain your property, we provide comprehensive solutions tailored to your requirements.</p>
                          
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Specialty  Construction</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Specialty  Construction</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Specialty  Construction</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-3">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Specialty  Construction</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                <section className="section-3 py-5 bg-light">
                    <div className="container-fluid">
                        <div className="section-header text-center">
                            <span>Our projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                          
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-3">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Construction Project</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Construction Project</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Construction Project</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-3 ">
                                <div className='item'>
                                    <div className="service-image">
                                        <img src={ProjectImg} alt="" className="w-100" />
                                    </div>
                                    <div className="service-body">

                                        <div className='service-title'>
                                        <h3>Construction Project</h3>
                                        </div>    
                                        <div className='service-content'>

                                        <p>Our construction services are designed to meet your unique needs and deliver exceptional results. Whether you're looking to build a new structure, renovate an existing space.</p>
                                        </div>

                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                

                <section className="section-5 py-5">
                    <div className="container">
                    <div className="section-header text-center">
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                          
                        </div>
                        <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={3} pagination={{ clickable: true }} >
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-4'>
                                    <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                        </div>
                                        
                                        <div className="content pt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione at odio dolor optio, sapiente non amet sed doloremque earum doloribus eius dolore laudantium consequuntur voluptatibus, magnam eveniet in quos.</p>
                                            <hr />
                                            <div className="d-flex meta">
                                                <div> <img src={AvatarImg} alt="" width={50} />
                                                </div>
                                                    <div className="ps-3">
                                                    <div className="name">John Doe</div>
                                                    <div className="position">CEO, Company</div>
                                                    </div>
                                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='card shadow border-0'>
                                    <div className='card-body p-4'>
                                    <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                        </div>
                                        
                                        <div className="content pt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione at odio dolor optio, sapiente non amet sed doloremque earum doloribus eius dolore laudantium consequuntur voluptatibus, magnam eveniet in quos.</p>
                                            <hr />
                                            <div className="d-flex meta">
                                                <div> <img src={AvatarImg} alt="" width={50} />
                                                </div>
                                                    <div className="ps-3">
                                                    <div className="name">John Doe</div>
                                                    <div className="position">CEO, Company</div>
                                                    </div>
                                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='card shadow border-0'>
                                    <div className='card-body p-4'>
                                    <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                        </div>
                                        
                                        <div className="content pt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione at odio dolor optio, sapiente non amet sed doloremque earum doloribus eius dolore laudantium consequuntur voluptatibus, magnam eveniet in quos.</p>
                                            <hr />
                                            <div className="d-flex meta">
                                                <div> <img src={AvatarImg} alt="" width={50} />
                                                </div>
                                                    <div className="ps-3">
                                                    <div className="name">John Doe</div>
                                                    <div className="position">CEO, Company</div>
                                                    </div>
                                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className='card shadow border-0'>
                                    <div className='card-body p-4'>
                                    <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                        </div>
                                        
                                        <div className="content pt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione at odio dolor optio, sapiente non amet sed doloremque earum doloribus eius dolore laudantium consequuntur voluptatibus, magnam eveniet in quos.</p>
                                            <hr />
                                            <div className="d-flex meta">
                                                <div> <img src={AvatarImg} alt="" width={50} />
                                                </div>
                                                    <div className="ps-3">
                                                    <div className="name">John Doe</div>
                                                    <div className="position">CEO, Company</div>
                                                    </div>
                                                   
                                           
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>


                <section className='section-6 bg-light py-5'>
                    <div className="container">
                        <div className="section-header text-center">
                        <span>Blog  & News</span>
                            <h2>Articles & blog posts</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className='row pt-3'>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                     <img src={BlogImg} alt="" className='w-100'/>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'> 
                                            <a href="#" className='title'>Dummy Blog title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                     <img src={BlogImg} alt="" className='w-100'/>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'> 
                                            <a href="#" className='title'>Dummy Blog title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                     <img src={BlogImg} alt="" className='w-100'/>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'> 
                                            <a href="#" className='title'>Dummy Blog title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                     <img src={BlogImg} alt="" className='w-100'/>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'> 
                                            <a href="#" className='title'>Dummy Blog title</a>
                                        </div>
                                        <a href="#" className='btn btn-primary small'>Read More</a>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



            </main>
            <Footer/>
        </>
    
    );
}

export default Home;
