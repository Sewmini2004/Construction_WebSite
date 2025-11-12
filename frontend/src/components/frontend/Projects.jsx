import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ProjectImg from '../../assets/images/construction2.jpg'
import { apiurl } from '../common/https';
import { useEffect, useState } from 'react';
import { fileurl } from '../common/https';
import { Link } from 'react-router-dom';
import ShowTestimonial from '../common/ShowTestimonial'

const Projects = () => {

    const [projects, setProjects] = useState([]);
        const fetchProjects = async () => {
            const response = await fetch(apiurl + 'get-all-projects', {
                method: 'GET',
               
            });
            const result = await response.json();
            console.log(result);
            if (result.status == true) {
                setProjects(result.data);
            }
        }
        useEffect(() => {
            fetchProjects();
        }, []);
    
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
                            <div className="row p-5 pt-5">
        { 
                projects && projects.map(project => { 
                    return (
                        
                        <div className="col-md-3">
                            <div className='item'>
                                <div className="service-image">
                                    <img src={`${fileurl}uploads/temp/${project.image}`} alt=""  className="w-100"  />
                                </div>
                                <div className="service-body">
    
                                    <div className='service-title'>
                                        <h3>{project.title}</h3>
                                    </div>    
                                    <div className='service-content'>
    
                                    <p>{project.short_desc}</p>
                                    </div>
    
                                    <Link to={`/project/${project.id}`} className="btn btn-primary small">Read More</Link>
                                </div>
                            </div>
                        </div>
                        )
                })
            }   
                            </div>
                        </div>
            </section>
            
            
            <section className="section-11  bg-light py-4">
                    <ShowTestimonial/>
            </section>
    

          <Footer/>
            
      </>
    
  )
}

export default Projects