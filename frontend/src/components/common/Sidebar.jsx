import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth'

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <>
            <div className=" card border-0 shadow">
                <div className="card-body p-4 sidebar">
                    <h4>Sidebar</h4>
                    <ul>
                        <li > <a href="/admin/dashboard">Dashboard</a></li>
                        <li> <a href="/admin/services">Services</a></li>
                        <li> <a href="/admin/projects">Projects</a></li>
                        <li> <a href="/admin/articles">Articles</a></li>
                        <li> <a href="/admin/testimonials">Testimonials</a></li>
                        <li><a href="/admin/members">Members</a></li>  
                        <li>
                          
                            <button onClick={logout} className="btn btn-primary mt-4">Logout</button>
                        </li>
                    </ul>
                </div>

                
      </div>
      </>
     
      
  )
}

export default Sidebar