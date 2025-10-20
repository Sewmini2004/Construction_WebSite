import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ProjectImg from '../../assets/images/construction2.jpg'

const Projects = () => {
    return (
        <>
            <Header />
            <mian>
                <Hero preHeading="Quality. Integrity. Value." heading="Our Projects" text="We excel at transforming visions into reality through <br/> outstanding craftsmanship and precise."/>

            </mian>

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
    

          <Footer/>
            
      </>
    
  )
}

export default Projects