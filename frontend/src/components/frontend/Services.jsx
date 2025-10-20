import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import AboutNew from '../common/About'
import ServiceImg from '../../assets/images/construction_services.jpg';

const Services = () => {
  return (
      <>
          <Header />
               
          <Hero preHeading="Quality. Integrity. Value." heading="Services" text="We excel at transforming visions into reality through <br/> outstanding craftsmanship and precise."/> 

              <section className="section-3 py-5 bg-light">
                              <div className="container">
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

        


          <Footer />
      </>
  )
}

export default Services