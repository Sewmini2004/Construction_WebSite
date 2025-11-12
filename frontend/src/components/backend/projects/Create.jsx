import React, { useState, useRef, useMemo } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { useForm } from 'react-hook-form';
import { apiurl, token } from '../../common/https'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from "jodit-react";
import { Link } from 'react-router-dom';


const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [imagename, setImageName] = useState(null);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Content'
  }), [placeholder]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newdata = {
      ...data,
      content,
      image: imagename
    };

    const res = await fetch(apiurl + "project/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token()}`
      },
      body: JSON.stringify(newdata)
    });

    const result = await res.json();

      console.log(result.status);
    if (result.status === true) {
      toast.success(result.message);
      navigate("/admin/projects");
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);

    await fetch(apiurl + "temp-image/store", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token()}`
      },
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === "true") {
          console.log("Image upload success");
          setImageName(result.data.name);
        } else {
          console.log("Image upload error");
          toast.error(result.errors.image[0]);
        }
      });
  };

 
  return (
    <>
      <Header />
      <main>
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
                    <h4 className='h5'>Projects / Create</h4>
                    <Link to="/admin/projects" className='btn btn-primary'>Back</Link>
                  </div>
                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>
  <div className='row'>
    <div className='col-md-6'>

      {/* Project Title */}
      <div className='mb-3'>
        <label htmlFor="title" className='form-label'>Project Title</label>
        <input
          {...register("title", { required: "Project Title is required" })}
          type="text"
          id="title"
          className={`form-control form-control-lg ${errors.title ? 'is-invalid' : ''}`}
          placeholder="Enter Project Title"
        />
        {errors.title && <p className='invalid-feedback'>{errors.title.message}</p>}
      </div>

      {/* Slug */}
      <div className='mb-3'>
        <label htmlFor="slug" className='form-label'>Slug</label>
        <input
          {...register("slug", { required: "Slug is required" })}
          type="text"
          id="slug"
          className={`form-control form-control-lg ${errors.slug ? 'is-invalid' : ''}`}
          placeholder="Enter Slug (e.g., project-title)"
        />
        {errors.slug && <p className='invalid-feedback'>{errors.slug.message}</p>}
      </div>

      {/* Short Description */}
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

    <div className='col-md-6'>
      {/* Construction Type */}
       <div className='mb-3'>
    <label htmlFor="construction_type" className='form-label'>Construction Type</label>
    <select
      {...register("construction_type", { required: "Construction type is required" })}
      id="construction_type"
      className={`form-control form-control-lg ${errors.construction_type ? 'is-invalid' : ''}`}
    >
      <option value="">Select Construction Type</option>
      <option value="Residential">Residential</option>
      <option value="Commercial">Commercial</option>
      <option value="Industrial">Industrial</option>
      <option value="Institutional">Institutional</option>
      <option value="Mixed-use">Mixed-use</option>
    </select>
    {errors.construction_type && (
      <p className='invalid-feedback'>{errors.construction_type.message}</p>
    )}
  </div>

      {/* Sector */}
      <div className='mb-3'>
        <label htmlFor="sector" className='form-label'>Sector</label>
        <input
          {...register("sector", { required: "Sector is required" })}
          type="text"
          id="sector"
          className={`form-control form-control-lg ${errors.sector ? 'is-invalid' : ''}`}
          placeholder="Enter Sector (e.g., Residential, Commercial)"
        />
        {errors.sector && <p className='invalid-feedback'>{errors.sector.message}</p>}
      </div>

      {/* Location */}
      <div className='mb-3'>
        <label htmlFor="location" className='form-label'>Location</label>
        <input
          {...register("location", { required: "Location is required" })}
          type="text"
          id="location"
          className={`form-control form-control-lg ${errors.location ? 'is-invalid' : ''}`}
          placeholder="Enter Project Location"
        />
        {errors.location && <p className='invalid-feedback'>{errors.location.message}</p>}
      </div>

      {/* Project Status */}
      <div className='mb-3'>
        <label htmlFor="status" className='form-label'>Project Status</label>
        <select
          {...register("status", { required: "Project Status is required" })}
          id="status"
          className={`form-control form-control-lg ${errors.status ? 'is-invalid' : ''}`}
        >
          <option value="">Select Status</option>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
        {errors.status && <p className='invalid-feedback'>{errors.status.message}</p>}
      </div>

      {/* Project Image */}
      <div className='mb-3'>
        <label htmlFor="image" className='form-label'>Project Image</label>
        <input
          onChange={handleFile}
          type="file"
          id="image"
          className='form-control form-control-lg'
        />
      </div>
    </div>
  </div>

  {/* Content Editor */}
  <div className='mb-3'>
    <label htmlFor="content" className='form-label'>Content</label>
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={newContent => setContent(newContent)}
      onChange={() => {}}
    />
  </div>

  <div className='d-flex justify-content-end'>
    <button disabled={isDisabled} type="submit" className='btn btn-primary mt-3'>
      Submit
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
  );
}

export default Create;
