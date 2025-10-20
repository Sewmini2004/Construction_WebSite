import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

const Dashbord = () => {
  return (
      <>
          <Header />
          <main className='dashboard'>
              <div className='row'>
                  <div className='col-md-3'>
                      
                  </div>

                  <div className='col-md-9'>
                      <div className='card border-0 shadow'>
                          <div className='card-body'>
                              <h4>Dashboard</h4>

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