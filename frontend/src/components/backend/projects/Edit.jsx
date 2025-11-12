import React, { useRef, useState, useMemo } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import { useForm } from 'react-hook-form';
import { apiurl, token , fileurl} from '../../common/https';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const Edit = ({ placeholder = 'Content' }) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [project, setProject] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [imagename, setImageName] = useState(null);
  const navigate = useNavigate();
  const param = useParams();

  // Jodit config
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder
    }),
    [placeholder]
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched',
    defaultValues: async () => {
      const res = await fetch(apiurl + 'project/show/' + param.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token()}`
        }
      });

      const result = await res.json();
      console.log('API Response:', result);

     
      if (!result.project) {
        toast.error('Failed to load project data');
        return {};
      }

      const data = result.project;
      setProject(data);
      setContent(data.content || '');
      setImageName(data.image); 

      console.log('Loaded project:', data);

      return {
        title: data.title || '',
        slug: data.slug || '',
        short_desc: data.short_desc || '',
        construction_type: data.construction_type || '',
        sector: data.sector || '',
        location: data.location || '',
        status: data.status?.toString() || '1',
        image: data.image || '',
        content: data.content || ''
      };
    }
  });

  // Submit form
  const onSubmit = async (data) => {
    setIsDisabled(true);

    const newdata = {
      ...data,
      content: content || '',
      image: imagename || project?.image || ''
    };

    try {
      const res = await fetch(apiurl + 'project/update/' + param.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token()}`
        },
        body: JSON.stringify(newdata)
      });

      const result = await res.json();
      if (result.status === true) {
        toast.success(result.message || 'Project updated successfully');
        navigate('/admin/projects');
      } else {
        toast.error(result.message || 'Update failed');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Something went wrong');
    } finally {
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
      const response = await fetch(apiurl + 'temp-image/store', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token()}`
        },
        body: formData
      });

      const result = await response.json();
     
      if (result.status === 'true') {
        toast.success('Image uploaded');
        setImageName(result.data.name);
      } else {
        toast.error(result.errors?.image?.[0] || 'Upload failed');
      }
    } catch (err) {
      console.error('Image upload error:', err);
      toast.error('Image upload error');
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
                    <h4 className="h5">Projects / Edit</h4>
                    <Link to="/admin/projects" className="btn btn-primary">
                      Back
                    </Link>
                  </div>
                  <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
          {/* First row: Left and Right columns */}
          <div className="row">
            {/* Left column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Project Title</label>
                <input
                  {...register('title', { required: 'Project Title is required' })}
                  type="text"
                  id="title"
                  className={`form-control form-control-lg ${errors.title ? 'is-invalid' : ''}`}
                  placeholder="Enter Project Title"
                />
                {errors.title && <p className="invalid-feedback">{errors.title.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="slug" className="form-label">Slug</label>
                <input
                  {...register('slug', { required: 'Slug is required' })}
                  type="text"
                  id="slug"
                  className={`form-control form-control-lg ${errors.slug ? 'is-invalid' : ''}`}
                  placeholder="Enter Slug"
                />
                {errors.slug && <p className="invalid-feedback">{errors.slug.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="short_desc" className="form-label">Short Description</label>
                <textarea
                  {...register('short_desc', { required: 'Short description is required' })}
                  id="short_desc"
                  rows="2"
                  className={`form-control form-control-lg ${errors.short_desc ? 'is-invalid' : ''}`}
                  placeholder="Enter Short Description"
                ></textarea>
                {errors.short_desc && <p className="invalid-feedback">{errors.short_desc.message}</p>}
              </div>

                {/* Project Image */}
              <div className="mb-3 ">
                <label htmlFor="image" className="form-label " style={{ width: '150px' }}>
                  Project Image
                </label>
                <input
                  onChange={handleFile}
                  type="file"
                  id="image"
                  className="form-control form-control-lg"
                />
              </div>

              {imagename && (
                <img
                  src={fileurl + 'uploads/temp/' + imagename}
                  alt="Projects"
                  className="img-thumbnail rounded mt-2"
                  style={{ width: '400px', height: '250px', objectFit: 'cover' }}
                />
              )}                  
            </div>

            {/* Right column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="construction_type" className="form-label">Construction Type</label>
                <select
                  {...register('construction_type', { required: 'Construction type is required' })}
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
                {errors.construction_type && <p className="invalid-feedback">{errors.construction_type.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="sector" className="form-label">Sector</label>
                <input
                  {...register('sector', { required: 'Sector is required' })}
                  type="text"
                  id="sector"
                  className={`form-control form-control-lg ${errors.sector ? 'is-invalid' : ''}`}
                  placeholder="Enter Sector"
                />
                {errors.sector && <p className="invalid-feedback">{errors.sector.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  {...register('location', { required: 'Location is required' })}
                  type="text"
                  id="location"
                  className={`form-control form-control-lg ${errors.location ? 'is-invalid' : ''}`}
                  placeholder="Enter Location"
                />
                {errors.location && <p className="invalid-feedback">{errors.location.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="status" className="form-label">Project Status</label>
                <select
                  {...register('status', { required: 'Project Status is required' })}
                  id="status"
                  className={`form-control form-control-lg ${errors.status ? 'is-invalid' : ''}`}
                >
                  <option value="">Select Status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
                {errors.status && <p className="invalid-feedback">{errors.status.message}</p>}
              </div>

     
    </div>
  </div>

  {/* Full width row for Jodit Editor */}
  <div className="row mt-3">
    <div className="col-12">
      <label htmlFor="content" className="form-label">Content</label>
      <JoditEditor
        ref={editor}
        value={content || ''}
        config={config}
        tabIndex={1}
        onBlur={newContent => setContent(newContent)}
        onChange={() => {}}
      />
    </div>
  </div>

  <div className="d-flex justify-content-end mt-3">
    <button disabled={isDisabled} type="submit" className="btn btn-primary">
      Update
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
