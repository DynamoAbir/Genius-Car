import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(err => console.error(err));

    }
    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w=3/4' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="Password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" value="Sign Up" type='submit' />

                        </div>
                    </form>
                    <p className='p-8'>Already have an account ? <Link className="text-orange-600 font-bold" to='/login'>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;