import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';
import { useForm } from 'react-hook-form';
import { apiurl } from '../common/https';
import { toast } from 'react-toastify';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(apiurl + 'contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      if (result.status === true) {
        toast.success(result.data || 'Message sent successfully!');
        reset();
      } else {
        // handle Laravel validation messages
        if (typeof result.message === 'object') {
          const messages = Object.values(result.message)
            .flat()
            .join('\n');
          toast.error(messages);
        } else {
          toast.error(result.message || 'Something went wrong!');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="We excel at transforming visions into reality through outstanding craftsmanship and precision."
        />

        <section className="section-9 py-5">
          <div className="section-header text-center">
            <span></span>
            <h2>Contact Us</h2>
            <p>
              Our construction services are designed to meet your unique needs and deliver exceptional results.
              <br />
              Whether you're looking to build a new structure, renovate an existing space, or maintain your property.
            </p>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3 p-5">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call Us :</h3>
                    <div>
                      <a href="tel:123456678">123456678</a>
                    </div>
                    <div>
                      <a href="tel:222333444">222333444</a>
                    </div>

                    <h3 className="mt-4">Email :</h3>
                    <div>
                      <a href="mailto:exmple12@gmail.com">exmple12@gmail.com</a>
                    </div>
                    <div>
                      <a href="mailto:exmple15@gmail.com">exmple15@gmail.com</a>
                    </div>

                    <h3 className="mt-4">Address :</h3>
                    <p>12/2 Dummy Road, Dummy City</p>
                  </div>
                </div>
              </div>

              <div className="col-md-9 p-5">
                <div className="card shadow border-0">
                  <div className="card-body py-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-6 mb-2">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                          />
                          {errors.name && <small className="text-danger">{errors.name.message}</small>}
                        </div>

                        <div className="col-md-6 mb-2">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                              },
                            })}
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                          />
                          {errors.email && <small className="text-danger">{errors.email.message}</small>}
                        </div>

                        <div className="col-md-6 mb-2">
                          <label className="form-label">Phone No.</label>
                          <input
                            type="text"
                            {...register('phone', {
                              required: 'Phone number is required',
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Invalid phone number',
                              },
                            })}
                            className="form-control form-control-lg"
                            placeholder="Enter Phone No."
                          />
                          {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                        </div>

                        <div className="col-md-6 mb-2">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            {...register('subject', { required: 'Subject is required' })}
                            className="form-control form-control-lg"
                            placeholder="Enter Subject"
                          />
                          {errors.subject && <small className="text-danger">{errors.subject.message}</small>}
                        </div>
                      </div>

                      <div className="mt-3">
                        <label className="form-label">Message</label>
                        <textarea
                          rows={5}
                          {...register('message', { required: 'Message is required' })}
                          className="form-control form-control-lg"
                          placeholder="Enter your message"
                        ></textarea>
                        {errors.message && <small className="text-danger">{errors.message.message}</small>}
                      </div>

                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mt-3" style={{ width: '40%' }}>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
