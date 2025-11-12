import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { apiurl, token } from '../../common/https'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Show = () => {

    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        const res = await fetch(apiurl+"articles" , {
            'method': "GET",
            'headers': {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token()}`
            }
        });

        const result = await res.json();
        console.log(result);
        setArticles(result.data);
    }


      const deleteArticle = async (id) => {

        if (window.confirm("Are you sure you want to delete this article?")) {

        const res = await fetch(apiurl+"article/delete/"+id , {
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
            const newArticle = articles.filter(article => article.id !== id);
            setArticles(newArticle);
            toast.success(result.message);
        }else{
            toast.error(result.message);
        }
        }
    }
    

    useEffect(() => {
        fetchArticles();
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
                                      <h4 className='h5'>Articles</h4>
                                      <a href="articles/create" className='btn btn-primary '>create</a>
                                  </div>
                                  <hr />
                                  

                                  <div className='table-responsive' style={{ maxHeight: '450px', overflowY: 'auto' }}>
                                       <table className='table table-bordered table-striped'>
                                      <thead>
                                          <tr>
                                              <th>Id</th>
                                              <th>Article Title</th>
                                              <th>Article Description</th>
                                              <th>Status</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
        {
                articles && articles.map(article => {
                return(
                    <tr key={`article-${article.id}`}>
                        <td>{article.id}</td>
                        <td>{article.title}</td>
                        <td>{article.short_desc}</td>
                        <td> {
                        (article.status == 1) ? "Active" : "Block"
                        }

                        </td>
                        <td>
                            <Link to={ `/admin/articles/edit/${article.id}`} className='btn btn-warning btn-sm me-2'>Edit</Link>
                        <Link onClick={() => deleteArticle(article.id)} className='btn btn-danger btn-sm'>Delete</Link>
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