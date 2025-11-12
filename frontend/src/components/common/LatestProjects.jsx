import React, { useEffect, useState } from 'react'
import { apiurl, fileurl } from '../common/https';
import { Link } from 'react-router-dom';


const LatestProjects = () => {
    
    const [projects, setProjects] = useState([]);
    const fetchLatestProjects = async () => {
    
         const res = await fetch(apiurl+"get-latest-projects?limit=5", {
                'method': "GET",
         });

        const result = await res.json();
        console.log(result);
        setProjects(result.data);
      
    }

    useEffect(() => {
            fetchLatestProjects();
    }, []);

  return (
     <section className="section-3 py-5  p-5 bg-light">
                        <div className="container-fluid">
                            <div className="section-header text-center">
                                <span>Our projects</span>
                                <h2>Discover our diverse range of projects</h2>
                                <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                              
                            </div>
                            <div className="row pt-5">
        { 
            projects && projects.map(project => { 
                return (
                    
                    <div className="col-md-3 mb-4">
                        <div className='item'>
                            <div className="service-image">
                               <img src={`${fileurl}uploads/temp/${project.image}`} alt=""  className="w-100"  />
                            </div>
                            <div className="service-body">

                                <div className='service-title'>
                                    <h3>{project.title}</h3>
                                </div>    
                                <div className='service-content'>

                                <p>{project.short_desc}</p>
                                </div>

                                <Link to={`/project/${project.id}`} className="btn btn-primary small">Read More</Link>
                            </div>
                        </div>
                    </div>
                    )
            })
        }                
                               
                            </div>
                        </div>
                    </section>
    
  )
}

export default LatestProjects