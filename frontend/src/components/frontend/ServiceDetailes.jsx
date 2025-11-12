import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { apiurl } from '../common/https';   
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../common/Hero';
import { fileurl } from '../common/https';
import { Link } from 'react-router-dom';
import ShowTestimonial from '../common/ShowTestimonial';

const ServiceDetailes = () => {

    const [service, setService] = useState([]);
    const [services, setServices] = useState([]);
    const params = useParams();

    const fetchServices = async () => {
    const res = await fetch(apiurl+"get-services", {
            'method': "GET",
    });

    const result = await res.json();
    console.log(result);
    setServices(result.data);
    }
    

     const fetchServiceDetailes = async () => {
        const res = await fetch(apiurl+"get-service/"+params.id, {
              'method': "GET",
       });
  
      const result = await res.json();
      console.log(result);
      setService(result.data);
    }
    
    useEffect(() => {
        fetchServiceDetailes();
        fetchServices();
    }, [params.id]);


    return (
 
      <>
    <Header/>
    <main>
                <Hero preHeading="Quality. Integrity. Value."
                    heading={ `${service.title}`}
                    text="" /> 
                
                <section className="section-10 ">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow border-0 sidebar">
                                <div className='card-body px-4 py-4'>
                                        <h3 className='mt-2 mb-3'>Our Services</h3>
                <ul>
                    {
                        services && services.map(service => {
                            return (
                                <li key={service.id}>
                                    <Link to={`/service/${service.id}`}>{service.title}</Link>
                                </li>
                            )
                        })
                    }
                                        </ul>
                                    
                           </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div>
                              <img src={`${fileurl}uploads/temp/${service.image}`} alt="" className="w-100 h-50" />      
                                </div>
                                <h3 className='py-3'>{service.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: service.content}}>
                                    
                                </div>
                        </div>
                        </div>
                        
                    <div className='row'>
                        <div className="col-md-12">
                            <ShowTestimonial/>
                        </div>
                        
                    </div>    
                    </div>
                </section>
    </main>
    <Footer/>
      </>
  )
}

export default ServiceDetailes