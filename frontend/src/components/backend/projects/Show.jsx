import React from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link } from 'react-router-dom'
import { apiurl, token } from '../../common/https'
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'


const Show = () => {

   
       const [projects, setProjects] = useState([]);
   
       const fetchProjects = async () => {
           const res = await fetch(apiurl+"projects" , {
               'method': "GET",
               'headers': {
                   "Content-Type": "application/json",
                   "Accept": "application/json",
                   "Authorization": `Bearer ${token()}`
               }
           });
   
           const result = await res.json();
           console.log(result);
           setProjects(result.data);
    }


    const deleteProject = async (id) => {

        if (window.confirm("Are you sure you want to delete this project?")) {

        const res = await fetch(apiurl+"project/delete/"+id , {
            'method': "DELETE",
            'headers': {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            }
        });

        const result = await res.json();
            console.log(result.status);
            
        if(result.status == true){
            const updatedProjects = projects.filter(project => project.id !== id);
            setProjects(updatedProjects);
            toast.success(result.message);
        }else{
            toast.error(result.message);
        }
        }
    }
    

    useEffect(() => {
        fetchProjects();
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
                                      <h4 className='h5'>Projects</h4>
                                      <a href="projects/create" className='btn btn-primary '>create</a>
                                  </div>
                                  <hr />
                                  

                                  <div className='table-responsive' style={{ maxHeight: '450px', overflowY: 'auto' }}>
                                       <table className='table table-bordered table-striped'>
                                      <thead>
                                          <tr>
                                              <th>Id</th>
                                              <th>Project Title</th>
                                              <th>Project Description</th>
                                              <th>Status</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
        {
                projects && projects.map(project => {
                return(
                    <tr key={`project-${project.id}`}>
                        <td>{project.id}</td>
                        <td>{project.title}</td>
                        <td>{project.short_desc}</td>
                        <td> {
                        (project.status == 1) ? "Active" : "Block"
                        }

                        </td>
                        <td>
                            <Link to={ `/admin/project/edit/${project.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                        <Link onClick={() => deleteProject(project.id)} className='btn btn-danger btn-sm'>Delete</Link>
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