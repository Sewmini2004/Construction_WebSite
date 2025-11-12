import React from 'react'
import Hero from '../common/Hero'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { apiurl } from '../common/https'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { fileurl } from '../common/https'
import { Link } from 'react-router-dom'


const BlogDetail = () => {
    const [article, setArticle] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);
    const params = useParams();
    
   const fetchLatestArticle = async () => {
    const res = await fetch(apiurl+"get-latest-articles", {
            'method': "GET",
    });

    const result = await res.json();
    console.log(result);
    setLatestArticles(result.data);
}

    const fetchArticle = async () => {
    const res = await fetch(apiurl+"get-article/"+params.id, {
            'method': "GET",
    });

    const result = await res.json();
    console.log(result);
    setArticle(result.data);
}

useEffect(() => {
    fetchArticle();
    fetchLatestArticle();
}, [params.id]);

  return (
    <>
   <Header/>
          
    <main>
    <Hero preHeading="Quality. Integrity. Value."
                  heading="Blog & News"
                  text="" /> 
              

              <section className="section-11">
               <div className='container py-5'>
                  <div className="row">
                      <div className="col-md-8">
                          <h2 className='mb-3'>{article.title}</h2>
                          <div className='pb-3'>by <strong>{article.author}</strong> on {article.created_at}</div>
                          <div className='pe-md-5 pb-3'>
                              <img src={`${fileurl}uploads/temp/${article.image}`} alt="" style={{width: '70%'}} />
                              
                          </div>
                          <div>
                              <div dangerouslySetInnerHTML={{__html: article.content}}></div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className='card shadow border-0 sidebar'>
                              <div className='card-body p-4'>
                                  <h3 className='mb-3 mt-2'>Latest Blogs</h3>
            { 
                latestArticles && latestArticles.map(article => { 
                    return(
                        <div className='d-flex border-bottom'>
                            <div className='pe-2 pb-2'>
                                 <Link to={`/blog/${article.id}`}>
                                 <img src={`${fileurl}uploads/temp/${article.image}`} alt="" width={100} />
                                 </Link>
                              
                            </div>
                            <Link to={`/blog/${article.id}`}>{article.title}</Link>
                        </div>
                    )
                })
            }
                               
                              </div>
                              
                          </div>
                          
                      </div>
                  </div>
                  
              </div></section>
             
                      
    </main>
    <Footer/>
   
    </>
  )
}

export default BlogDetail