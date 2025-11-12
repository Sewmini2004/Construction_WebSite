import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { apiurl, fileurl } from '../common/https'
import { useState } from 'react'
import ShowTestimonial from '../common/ShowTestimonial'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import { Link } from 'react-router-dom'

const ProjectDetail = () => {

    const [project, setProject] = useState([]);
    const params = useParams();


     const fetchProjects = async () => {
        const res = await fetch(apiurl+"get-project/"+params.id, {
              'method': "GET",
       });
  
      const result = await res.json();
      console.log(result);
      setProject(result.data);
    }
    
    useEffect(() => {
        fetchProjects();
    }, []);


    return (
 
      <>
    <Header/>
    <main>
                <Hero preHeading="Quality. Integrity. Value."
                    heading={ `${project.title}`}
                    text="" /> 
                
                <section className="section-10 ">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow border-0 sidebar">
                                <div className='card-body px-4 py-4'>
                                        <h3 className='mt-2 mb-3'>Insights</h3>
                    <ul >
                        { 
                            project && project.location && (
                                <li className='mb-2' >
                                    <span className='text-body-secondary'>Location</span>
                                    <p>{project.location}</p>
                                </li>
                          )
                                                
                            
                        }
                        
                        { 
                            project && project.construction_type && (
                                <li className='mb-2' >
                                    <span className='text-body-secondary'>Construction Type</span>
                                    <p>{project.construction_type}</p>
                                </li>
                            )
                    }
                    
                    { 
                        project && project.sector && (
                            <li className='mb-2' >
                                <span className='text-body-secondary'>Sector</span>
                                <p>{project.sector}</p>
                            </li>
                        )
                    }

        </ul>
                {/* <ul>
                    {
                        projects && projects.map(project => {
                            return (
                                <li key={project.id}>
                                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                                </li>
                            )
                        })
                    }
                                        </ul> */}
                                    
                           </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div>
                              <img src={`${fileurl}uploads/temp/${project.image}`} alt="" className="w-100 h-50" />      
                                </div>
                                <h3 className='py-3'>{project.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: project.content}}>
                                    
                                </div>
                        </div>
                        </div>
                        
                 
                    </div>
                </section>

                <section className="section-11  bg-light py-4">
                      <ShowTestimonial/>
                </section>
    </main>
    <Footer/>
      </>
  )
}

export default ProjectDetail