import React, { useState, useRef, useEffect, useMemo } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { useForm } from 'react-hook-form';
import { apiurl, token } from '../../common/https'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";

const Create = () => {

     const editor = useRef(null);
        const [content, setContent] = useState('');
        const [isDisabled, setIsDisabled] = useState(false);
        const [imageId, setImageId] = useState(null);
        const [imagename, setImageName] = useState(null);
    
        const config = useMemo(() => ({
            readonly: false,
            placeholder:  'Content'
        }), []);
    

     const { register, handleSubmit, formState: { errors } } = useForm({
            mode: 'onTouched' 
        });
    
        const navigate = useNavigate();
        const onSubmit = async (data) => {
            const newdata = {
                ...data,
                "content": content,
                "image": imagename
            }
            const res = await fetch(apiurl+"testimonial/store" , {
                'method': "POST",
                'headers': {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                },
                body: JSON.stringify(newdata)
            });
    
            const result = await res.json();
          
            if (result.status == true) {
                toast.success(result.message);
                navigate("/admin/testimonials");
            } else {
                toast.error(result.message);
                navigate("/admin/testimonials/create");
            }
            
    
        }
    
    
        const handleFile = async (e) => {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append("image", file);
            await fetch(apiurl+"temp-image/store" , {
                'method': "POST",
                'headers': {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                },
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                if (result.status == "true") {
                    
                    console.log("success");
                    setImageName(result.data.name);
                } else {
                    console.log("error");
                    toast.error(result.errors.image[0]);
                }
            })
        }
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
                                        <h4 className='h5'>Testimonials / Create</h4>
                                        <a href="/admin/testimonials" className='btn btn-primary '>Back</a>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* Service Title */}
                                        <div className='mb-3'>
                                            <label htmlFor="testimonial" className='form-label'>Testimonial</label>
                                            <input
                                                {...register("testimonial", {
                                                    required: "Testimonial is required",
                                                })}
                                                type="text" 
                                                id="testimonial" 
                                                className={`form-control form-control-lg ${errors.testimonial ? 'is-invalid' : ''}`} 
                                                placeholder="Enter Testimonial" 
                                            />
                                            {errors.testimonial && <p className='invalid-feedback'>{errors.testimonial.message}</p>}
                                              </div>
                                              
                                               <div className='mb-3'>
                                            <label htmlFor="designation" className='form-label'>Designation</label>
                                            <input
                                                {...register("designation", {
                                                    required: "Designation is required",
                                                })}
                                                id="designation"
                                                cols="2" rows="2" 
                                                className={`form-control form-control-lg ${errors.designation ? 'is-invalid' : ''}`}
                                            />
                                            {errors.designation && <p className='invalid-feedback'>{errors.designation.message}</p>}
                                        </div>

                                        {/* Service Description */}
                                        <div className='mb-3'>
                                            <label htmlFor="citation" className='form-label'>Citation</label>
                                            <textarea
                                                {...register("citation", {
                                                    required: "Citation is required",
                                                })}
                                                id="citation"
                                                cols="2" rows="2" 
                                                className={`form-control form-control-lg ${errors.citation ? 'is-invalid' : ''}`}
                                            ></textarea>
                                            {errors.citation && <p className='invalid-feedback'>{errors.citation.message}</p>}
                                        </div>


                                            </div>
                                            <div className='col-md-6'>

                                        {/* Service Status */}
                                        <div className='mb-3'>
                                            <label htmlFor="status" className='form-label'> Status</label>
                                            <select
                                                {...register("status", {
                                                    required: "Service Status is required",
                                                })}
                                                id="status"
                                                className={`form-control form-control-lg ${errors.status ? 'is-invalid' : ''}`}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                            {errors.status && <p className='invalid-feedback'>{errors.status.message}</p>}
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor="image" className='form-label'> Image</label>
                                            <input
                                                onChange={handleFile}
                                                type="file" 
                                                id="image" 
                                                className={`form-control form-control-lg`} 
                                                placeholder="Enter Service Image" 
                                            />
                                                </div>
                                                
                                            </div>

                                
                                        </div>
                                        
                                        


                                        <div className='d-flex justify-content-end'>
                                            <button disabled={isDisabled} type="submit" className='btn btn-primary mt-3'>Submit</button>
                                        </div>
                                    </form>
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

export default Create