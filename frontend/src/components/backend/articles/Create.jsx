import React, { useState, useRef, useMemo } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { useForm } from 'react-hook-form';
import { apiurl, token } from '../../common/https'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";


const Create = ({ placeholder }) => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [imageId, setImageId] = useState(null); 
    const [imagename, setImageName] = useState(null);

    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || 'Article Content'
    }), [placeholder]);


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onTouched'
    });

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setIsDisabled(true);
        const newdata = {
            ...data,
            "content": content,
            "image": imagename
        }

        if (!content.trim()) {
             toast.error("Article content is required.");
             setIsDisabled(false);
             return;
        }

        const res = await fetch(apiurl + "article/store", {
            'method': "POST",
            'headers': {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            },
            body: JSON.stringify(newdata)
        });

        const result = await res.json();
        setIsDisabled(false); 

        if (result.status == true) {
            toast.success(result.message);
            navigate("/admin/articles");
        } else {
            toast.error(result.message || "Failed to create article.");
            navigate("/admin/articles/create");  
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
                                        <h4 className='h5'>Articles / Create</h4>
                                        <a href="/admin/articles" className='btn btn-primary '>Back</a>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='row'>
                                            {/* Article Title (Row 1, Column 1) */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="title" className='form-label'>Article Title</label>
                                                    <input
                                                        {...register("title", {
                                                            required: "Article Title is required",
                                                        })}
                                                        type="text"
                                                        id="title"
                                                        className={`form-control form-control-lg ${errors.title ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Article Title"
                                                    />
                                                    {errors.title && <p className='invalid-feedback'>{errors.title.message}</p>}
                                                </div>
                                            </div>

                                            {/* Article Slug (Row 1, Column 2) */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="slug" className='form-label'>Article Slug</label>
                                                    <input
                                                        {...register("slug", {
                                                            required: "Article Slug is required",
                                                        })}
                                                        type="text"
                                                        id="slug"
                                                        className={`form-control form-control-lg ${errors.slug ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Article Slug"
                                                    />
                                                    {errors.slug && <p className='invalid-feedback'>{errors.slug.message}</p>}
                                                </div>
                                            </div>

                                            {/* Article Author (Row 2, Column 1) */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="author" className='form-label'>Article Author</label>
                                                    <input
                                                        {...register("author", {
                                                            required: "Article Author is required",
                                                        })}
                                                        type="text"
                                                        id="author"
                                                        className={`form-control form-control-lg ${errors.author ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Article Author"
                                                    />
                                                    {errors.author && <p className='invalid-feedback'>{errors.author.message}</p>}
                                                </div>
                                            </div>

                                            {/* Article Status (Row 2, Column 2) */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="status" className='form-label'>Article Status</label>
                                                    <select
                                                        {...register("status", {
                                                            required: "Article Status is required",
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
                                            </div>

                                            {/* Article Image (Row 3, Column 1) - Note: Image is not registered with RHF for file handling */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="image" className='form-label'>Article Image</label>
                                                    <input
                                                        onChange={handleFile}
                                                        type="file" 
                                                        id="image" 
                                                        className={`form-control form-control-lg`} 
                                                        placeholder="Enter Service Image" 
                                                    />
                                                    {imagename && <small className="text-success">Image ready: **{imagename}**</small>}
                                                 

                                                </div>
                                            </div>

                                            {/* Empty/Placeholder (Row 3, Column 2) or another field if needed */}
                                            <div className='col-md-6'>
                                                <div className='mb-3'>
                                                    <label htmlFor="short_desc" className='form-label'>Short Description</label>
                                                    <textarea
                                                      {...register("short_desc", { required: "Short description is required" })}
                                                      id="short_desc"
                                                      cols="2"
                                                      rows="2"
                                                      className={`form-control form-control-lg ${errors.short_desc ? 'is-invalid' : ''}`}
                                                      placeholder="Enter Short Description"
                                                    ></textarea>
                                                    {errors.short_desc && <p className='invalid-feedback'>{errors.short_desc.message}</p>}
                                                  </div>
                                                
                                            </div>
                                            
                                            <div className='col-md-12'>
                                                <hr/>
                                            </div>

                                            {/* Article Content (Full Width) */}
                                            <div className='col-md-12'>
                                                <div className='mb-3'>
                                                    <label htmlFor="content" className='form-label'>Article Content</label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content}
                                                        config={config}
                                                        tabIndex={1}
                                                        onBlur={newContent => setContent(newContent)}
                                                        onChange={newContent => { }} // Use onBlur for state change to avoid excessive re-renders
                                                    />
                                                    {/* Simple validation check for Jodit content */}
                                                  
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-end'>
                                            <button disabled={isDisabled || !imagename || !content.trim()} type="submit" className='btn btn-primary mt-3'>
                                                {isDisabled ? 'Submitting...' : 'Submit'}
                                            </button>
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