import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { apiurl, token } from '../../common/https'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';


const Show = () => {

    
        const [testimonials, setTestimonials] = useState([]);
    
        const fetchTestimonials = async () => {
            const res = await fetch(apiurl+"testimonials" , {
                'method': "GET",
                'headers': {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                }
            });
    
            const result = await res.json();
            console.log(result);
            setTestimonials(result.data);
        }
    
    const deleteTestimonial = async (id) => {
        const res = await fetch(apiurl+"testimonial/delete/"+id , {
            'method': "DELETE",
            'headers': {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            }
        });
    
        const result = await res.json();
        console.log(result);
        if (result.status == true) {
            const newTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
            setTestimonials(newTestimonials);
            toast.success(result.message);
            
        } else {
            toast.error(result.message);
        }
    }
    
    useEffect(() => {
        fetchTestimonials();
    }, []);
    

  return (
      <>
              <Header />
              <main >
                  <div className='container my-5'>
                  <div className='row'>
                      <div className='col-md-3'>
                          <div className='card border-0 shadow'>
                              <div className='card-body'>
                                  <Sidebar />
    
                              </div>
                          </div>
                          
                      </div>
    
                      <div className='col-md-9'>
                          <div className='card border-0 shadow'>
                                  <div className='card-body p-4'>
                                      <div className='d-flex justify-content-between'>
                                          <h4 className='h5'>Testimonials</h4>
                                          <a href="testimonials/create" className='btn btn-primary '>create</a>
                                      </div>
                                      <hr />
                                      
    
                                      <div className='table-responsive' style={{ maxHeight: '450px', overflowY: 'auto' }}>
                                           <table className='table table-bordered table-striped'>
                                          <thead>
                                              <tr>
                                                  <th>Id</th>
                                                  <th>Testimonial</th>
                                                  <th> Citation</th>
                                                  <th>Status</th>
                                                  <th>Actions</th>
                                              </tr>
                                          </thead>
                                          <tbody>
            {
                    testimonials && testimonials.map(testimonial => {
                    return(
                        <tr key={`testimonial-${testimonial.id}`}>
                            <td>{testimonial.id}</td>
                            <td>{testimonial.testimonial}</td>
                            <td>{testimonial.citation}</td>
                            <td> {
                            (testimonial.status == 1) ? "Active" : "Block"
                            }
    
                            </td>
                            <td>
                                <Link to={ `/admin/testimonials/edit/${testimonial.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                            <Link onClick={() => deleteTestimonial(testimonial.id)} className='btn btn-danger btn-sm'>Delete</Link>
                            </td>
                        </tr>
                    )
                    
                    
                })
            }
                                          </tbody>
                                      </table>
                                      </div>
                                     
    
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  </div>
                  
              </main>
    
              <Footer />
          </>
  )
}

export default Show