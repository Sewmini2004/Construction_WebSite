import React, { useRef, useState, useMemo, useEffect } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { useForm } from 'react-hook-form';
import { apiurl, token, fileurl } from '../../common/https';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const Edit = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [service, setService] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [imageName, setImageName] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || ''
    }),
    [placeholder]
  );

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    mode: 'onTouched'
  });

  // Fetch service data
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${apiurl}service/show/${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token()}`
          }
        });
        const result = await res.json();
        if (result.status === 'true' && result.service) {
          const data = result.service;
          setService(data);
          setContent(data.content || '');
          setValue('title', data.title);
          setValue('short_desc', data.short_desc);
          setValue('status', data.status);
          setImageName(data.image); // set existing image
        } else {
          toast.error('Failed to load service data');
          navigate('/admin/services');
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong while fetching service details');
      }
    };

    fetchService();
  }, [params.id, setValue, navigate]);

  // Submit handler
  const onSubmit = async (data) => {
    try {
      setIsDisabled(true);
      const payload = {
        ...data,
        content,
        image: imageName // use new uploaded image or existing one
      };

      const res = await fetch(`${apiurl}service/update/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token()}`
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      setIsDisabled(false);

      if (result.status === 'true') {
        toast.success(result.message);
        navigate('/admin/services');
      } else {
        toast.error(result.message || 'Failed to update service');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
      setIsDisabled(false);
    }
  };

  // Handle image upload
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${apiurl}temp-image/store`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token()}`
        },
        body: formData
      });

      const result = await res.json();
      if (result.status === 'true') {
        toast.success('Image uploaded successfully');
        setImageName(result.data.name); // set new image name
      } else {
        toast.error(result.errors?.image?.[0] || 'Image upload failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error uploading image');
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <Sidebar />
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Services / Edit</h4>
                    <a href="/admin/services" className="btn btn-primary">
                      Back
                    </a>
                  </div>
                  <hr />

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        {/* Service Title */}
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Service Title
                          </label>
                          <input
                            {...register('title', {
                              required: 'Service Title is required'
                            })}
                            type="text"
                            id="title"
                            className={`form-control form-control-lg ${
                              errors.title ? 'is-invalid' : ''
                            }`}
                            placeholder="Enter Service Title"
                          />
                          {errors.title && (
                            <p className="invalid-feedback">{errors.title.message}</p>
                          )}
                        </div>

                        {/* Service Description */}
                        <div className="mb-3">
                          <label htmlFor="short_desc" className="form-label">
                            Service Description
                          </label>
                          <textarea
                            {...register('short_desc', {
                              required: 'Service Description is required'
                            })}
                            id="short_desc"
                            rows="2"
                            className={`form-control form-control-lg ${
                              errors.short_desc ? 'is-invalid' : ''
                            }`}
                          ></textarea>
                          {errors.short_desc && (
                            <p className="invalid-feedback">{errors.short_desc.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        {/* Service Status */}
                        <div className="mb-3">
                          <label htmlFor="status" className="form-label">
                            Service Status
                          </label>
                          <select
                            {...register('status', {
                              required: 'Service Status is required'
                            })}
                            id="status"
                            className={`form-control form-control-lg ${
                              errors.status ? 'is-invalid' : ''
                            }`}
                          >
                            <option value="">Select Status</option>
                            <option value="1">Active</option>
                            <option value="0">Block</option>
                          </select>
                          {errors.status && (
                            <p className="invalid-feedback">{errors.status.message}</p>
                          )}
                        </div>

                        {/* Service Image */}
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">
                            Service Image
                          </label>
                          <input
                            onChange={handleFile}
                            type="file"
                            id="image"
                            className="form-control form-control-lg"
                          />

                          {/* Show current or uploaded image */}
                          {imageName && (
                            <img
                              src={fileurl + 'uploads/temp/' + imageName}
                              alt="Service"
                              className="img-thumbnail rounded mt-2"
                              style={{ width: '400px', height: '250px', objectFit: 'cover' }}
                            />
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-3 col-12">
                        <label htmlFor="content" className="form-label">
                          Content
                        </label>
                        <JoditEditor
                          ref={editor}
                          value={content}
                          config={config}
                          tabIndex={1}
                          onBlur={(newContent) => setContent(newContent)}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <button
                        disabled={isDisabled}
                        type="submit"
                        className="btn btn-primary mt-3"
                      >
                        {isDisabled ? 'Updateting...' : 'Update'}
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
};

export default Edit;
