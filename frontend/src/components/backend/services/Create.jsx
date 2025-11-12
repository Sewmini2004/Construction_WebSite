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
        const res = await fetch(apiurl+"service/store" , {
            'method': "POST",
            'headers': {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            },
            body: JSON.stringify(newdata)
        });

        const result = await res.json();
      
        if (result.status == "true") {
            toast.success(result.message);
            navigate("/admin/services");
        } else {
            toast.error(result.message);
            navigate("/admin/services/create");
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
                                        <h4 className='h5'>Services / Create</h4>
                                        <a href="/admin/services" className='btn btn-primary '>Back</a>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='row'>
                                            <div className='col-md-6'>
                                                {/* Service Title */}
                                        <div className='mb-3'>
                                            <label htmlFor="title" className='form-label'>Service Title</label>
                                            <input
                                                {...register("title", {
                                                    required: "Service Title is required",
                                                })}
                                                type="text" 
                                                id="title" 
                                                className={`form-control form-control-lg ${errors.title ? 'is-invalid' : ''}`} 
                                                placeholder="Enter Service Title" 
                                            />
                                            {errors.title && <p className='invalid-feedback'>{errors.title.message}</p>}
                                        </div>

                                        {/* Service Description */}
                                        <div className='mb-3'>
                                            <label htmlFor="short_desc" className='form-label'>Service Description</label>
                                            <textarea
                                                {...register("short_desc", {
                                                    required: "Service Description is required",
                                                })}
                                                id="short_desc"
                                                cols="2" rows="2" 
                                                className={`form-control form-control-lg ${errors.short_desc ? 'is-invalid' : ''}`}
                                            ></textarea>
                                            {errors.short_desc && <p className='invalid-feedback'>{errors.short_desc.message}</p>}
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
                                            <label htmlFor="image" className='form-label'>Service Image</label>
                                            <input
                                                onChange={handleFile}
                                                type="file" 
                                                id="image" 
                                                className={`form-control form-control-lg`} 
                                                placeholder="Enter Service Image" 
                                            />
                                                </div>
                                                
                                            </div>

                                            
                                        {/* Content */}
                                        <div className='mb-3 '>
                                            <label htmlFor="content" className='form-label'>content</label>
                                            <JoditEditor
                                               
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
                                            {errors.content && <p className='invalid-feedback'>{errors.content.message}</p>}
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