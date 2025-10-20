import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from 'react-hook-form';

const Login = () => {

    // Removed 'watch' as it's not being used, though it doesn't cause the error.
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        // console.log(data);

        const res = await fetch('http://localhost:8000/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log(result);

        if (result.status === false) {
            toast.error(result.message);
            
        }else{
            toast.success(result.message);
            
        }

        

    }

    return (
        <>
            <Header />

            <main>
                
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className="mb-3">Login Here</h4>
                                    
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                           
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        
                                            type="email" 
                                            className={`form-control ${errors.email ? "is-invalid" : ""}`} 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                        />

                                        {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                                    
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                }
                                            })}
                                        
                                            
                                            type="password" 
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`} 
                                            id="exampleInputPassword1" 
                                        />
                                        
                                        {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary w-50">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
            </main>
            
            <Footer />
        
        </>
    )
}

export default Login