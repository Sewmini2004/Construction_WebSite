import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';


const Contact = () => {
  return (
      <>
          <Header />
          <main>
              
              <Hero preHeading="Quality. Integrity. Value." heading="Contact Us" text="We excel at transforming visions into reality through <br/> outstanding craftsmanship and precise." /> 
              
              <section className='section-9 py-5'>
              <div className="section-header text-center">
                            <span></span>
                            <h2>Contact Us</h2>
                            <p>Our construction services are designed to meet your unique needs and deliver exceptional results. <br/> Whether you're looking to build a new structure, renovate an existing space, or maintain your property.</p>
                          
                  </div>
                  
                  <div className='container'>
                      <div  className='row mt-5'>
                      <div className='col-md-3'>
                          <div className='card shadow border-0 mb-3'>
                              <div className='card-boay p-4'>
                                  <h3>Call Us : </h3>
                                  <div> <a href='#'>{ 123456678} </a></div>
                                  <div>  <a href='#'>{ 222333444} </a></div>
                                 
                                

                                  <h3 className='mt-4'>You can call us : </h3>
                                  <div><a href='#'>exmple12@gmail.com </a></div>
                                  <div><a href='#'>exmple15@gmail.com  </a>
                                  </div>
                                  
                                  
                                  <h3 className='mt-4'>Address : </h3>
                                  <p href='#'>12/2  dumy road , <br /> Dummy
                                   </p>
                              </div>
                              
                          </div>
                          
                      </div>

                    <div className='col-md-9'>
                      <div className='card shadow border-0'>
                                  <div className='card-body py-5'>
                                         <form action="">
                                      <div className='row'>
                                      <div className='col-md-6 mb-4'>
                                              <label htmlFor='' className='form-label'>Name</label>
                                <input type="text" className='form-control form-control-lg ' placeholder="Enter Name"/>              
                                              

                                          
                                          </div>  
                                          <div className='col-md-6'>
                                              <label htmlFor='' className='form-label'>Email</label>
                                <input type="text" className='form-control form-control-lg ' placeholder="Enter Email"/>              
                                              

                                          
                                              </div>  
                                              <div className='col-md-6 mb-4'>
                                              <label htmlFor='' className='form-label'>Phone No.</label>
                                <input type="text" className='form-control form-control-lg ' placeholder="Enter Phone No."/>              
                                              

                                          
                                          </div>  
                                          <div className='col-md-6'>
                                              <label htmlFor='' className='form-label'>Subject</label>
                                <input type="text" className='form-control form-control-lg ' placeholder="Enter Subject"/>              
                                              

                                          
                            </div>  
                         
                         
                                          </div>
                                          
                                          <div>
                                              <label htmlFor='' className='form-label'>Message</label>
                                              <textarea name="" placeholder='Message' rows={5} id=' ' className='form-control form-control-lg'></textarea>
                                          </div>   
                                          
                                          <button className='btn btn-primary large mt-3'>Submit</button>
                                        
                            </form>
                                      

                     </div>
                              
                          </div>
                          
                      </div>
                      
                      </div>
                     
                      
                  </div>
                  
              </section>
          </main>
          
          <Footer/>
      </>
  )
}

export default Contact