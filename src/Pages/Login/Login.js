import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w=3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" value="Login" type='submit' />

                        </div>
                    </form>
                    <p className='p-8'>New to Genius Car ? <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;