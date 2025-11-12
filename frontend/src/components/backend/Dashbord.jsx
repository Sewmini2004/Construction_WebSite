import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'

const Dashbord = () => {
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
                          <div className='card-body'>
                              <h4 className='mb-3'>Welcome to Dashboard</h4>

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

export default Dashbord