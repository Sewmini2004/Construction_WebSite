import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AvatarImg from '../../assets/images/author-2.jpg';
import { apiurl, token, fileurl } from '../common/https';


const ShowTestimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch(apiurl + 'get-testimonials', {
                method: 'GET'
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await res.json();
            setTestimonials(result.data);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);



  return (
       <section className="section-5 py-5">
                    <div className="container">
                    <div className="section-header text-center">
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                          
                        </div>
              <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={3} pagination={{ clickable: true }} >
                  
                  { 
                      testimonials && testimonials.map(testimonial => { 
                          return (
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
                                              <p>{ testimonial.testimonial}</p>
                                            <hr />
                                            <div className="d-flex meta">
                                                  {/* <div> <img src={AvatarImg} alt="" width={50} /> */}
                                                  <div> <img src={`${fileurl}uploads/temp/${testimonial.image}`} alt="" width={50} height={50}/>
                                                </div>
                                                    <div className="ps-3">
                                                      <div className="name">{testimonial.citation }</div>
                                                      <div className="position">{testimonial.designation }</div>
                                                    </div>
                                                   
                                                  </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                    
                         
                            </SwiperSlide>
                         
                          )
                      })
                  }
                  

                           
                        </Swiper>
                    </div>
                </section>

  )
}

export default ShowTestimonial