import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { apiurl, token } from '../../common/https'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Show = () => {
      const [members, setMembers] = useState([]);
    
        const fetchMembers = async () => {
            const res = await fetch(apiurl+"members" , {
                'method': "GET",
                'headers': {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                }
            });
    
            const result = await res.json();
            console.log(result);
            setMembers(result.data);
        }
    
    
        const deleteMember = async (id) => {
    
            if (window.confirm("Are you sure you want to delete this member?")) {
    
            const res = await fetch(apiurl+"member/delete/"+id , {
                'method': "DELETE",
                'headers': {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token()}`
                }
            });
    
            const result = await res.json();
            console.log(result);
            if(result.status == true){
                const updatedMembers = members.filter(member => member.id !== id);
                setMembers(updatedMembers);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
            }
    }
    
        useEffect(() => {
            fetchMembers();
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
                                      <h4 className='h5'>Members</h4>
                                      <a href="members/create" className='btn btn-primary '>create</a>
                                  </div>
                                  <hr />
                                  

                                  <div className='table-responsive' style={{ maxHeight: '450px', overflowY: 'auto' }}>
                                       <table className='table table-bordered table-striped'>
                                      <thead>
                                          <tr>
                                              <th>Id</th>
                                              <th>Name</th>
                                              <th>Job Title</th>
                                              <th>Status</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
        {
               members  && members.map(member => {
                return(
                    <tr key={`member-${member.id}`}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.job_title}</td>
                        <td> {
                        (member.status == 1) ? "Active" : "Block"
                        }

                        </td>
                        <td>
                        <Link to={ `/admin/members/edit/${member.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                        <Link onClick={() => deleteMember(member.id)} className='btn btn-danger btn-sm'>Delete</Link>
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