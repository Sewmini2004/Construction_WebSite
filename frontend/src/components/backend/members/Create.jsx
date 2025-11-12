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
          const res = await fetch(apiurl+"member/store" , {
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
              navigate("/admin/members");
          } else {
              toast.error(result.message);
              navigate("/admin/members/create");
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
                                        <h4 className='h5'>Member / Create</h4>
                                        <a href="/admin/members" className='btn btn-primary '>Back</a>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* Service Title */}
                                        <div className='mb-3'>
                                            <label htmlFor="name" className='form-label'> Name</label>
                                            <input
                                                {...register("name", {
                                                    required: "Name is required",
                                                })}
                                                type="text" 
                                                id="name" 
                                                className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`} 
                                                placeholder="Enter Name" 
                                            />
                                            {errors.name && <p className='invalid-feedback'>{errors.name.message}</p>}
                                        </div>

                                <div className='mb-3'>
                                                <label htmlFor="job_title" className='form-label'> Job Title</label>
                                                <input
                                                    {...register("job_title", {
                                                        required: "Job Title is required",
                                                    })}
                                                    type="text" 
                                                    id="job_title" 
                                                    className={`form-control form-control-lg ${errors.job_title ? 'is-invalid' : ''}`} 
                                                    placeholder="Enter Job Title" 
                                                />
                                                {errors.job_title && <p className='invalid-feedback'>{errors.job_title.message}</p>}
                                            </div>


                                <div className='mb-3'>
                                                <label htmlFor="linkedin_link" className='form-label'> LinkedIn Link</label>
                                                <input
                                                    {...register("linkedin_link", {
                                                        required: "LinkedIn Link is required",
                                                    })}
                                                    type="text" 
                                                    id="linkedin_link" 
                                                    className={`form-control form-control-lg ${errors.linkedin_link ? 'is-invalid' : ''}`} 
                                                    placeholder="Enter " 
                                                />
                                                {errors.linkedin_link && <p className='invalid-feedback'>{errors.linkedin_link.message}</p>}
                                            </div>

                                            </div>
                                            <div className='col-md-6'>

                                        {/* Service Status */}
                                        <div className='mb-3'>
                                            <label htmlFor="status" className='form-label'>Service Status</label>
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