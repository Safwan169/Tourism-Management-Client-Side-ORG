import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa6";
import 'animate.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from 'firebase/auth';
import { myContext } from './Authentication';
import { auth } from '../Firebase/firebase.config';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const [eye, setEye] = useState(false)
    const [ok, setOk] = useState()
    const [okk, setOkk] = useState()
    const info = useContext(myContext)
    const { createUser, setDep, user } = info

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = (e.target.email.value)
        const password = (e.target.password.value)
        const Name = (e.target.name.value)
        const photoURL = (e.target.photoURL.value)

        setOkk('')
        setOk('')

        if (password.length < 6) {
            // setOkk('your password must be 6 letters')
            // toast.error('your password must be 6 letters', {
            //     position: 'top-center',
            //     style: {
            //         marginTop: '80px',
            //         marginLeft: '15px',
            //         border: '1px solid red',

            //     }
            // })
            setOkk("Your password must be 6 letters")
            return
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            // setOkk('Password must include both uppercase and lowercase letters')
            // toast.error('Password must include both uppercase and lowercase letters', {
            //     position: 'top-center',
            //     style: {
            //         marginTop: '80px',
            //         marginLeft: '5px',
            //         textAlign: 'center',
            //         border: '1px solid red',

            //     }
            // })
            setOkk("Password must include both uppercase and lowercase letters")
            // Swal.fire({
            //     title: "Oops!!",
            //     text: "Password must include both uppercase and lowercase letters",
            //     icon: "error",
            //     showConfirmButton: false,
            //     timer: 4000

            //   });
        
        
            return
        }
        // //console.log(ok)

        createUser(email, password, Name, photoURL)
            .then((userCredential) => {
                const user = userCredential.user;
                // toast.success('You have successfully registered')
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully registered",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000

                  });
                  e.target.reset();


                updateProfile(auth.currentUser, {
                    displayName: `${Name}`, photoURL: `${photoURL}`
                }).then((e) => {
                    // Profile updated!
                    //console.log('update hoisa', e)
                    setDep(true)


                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                    // setLoading(false)
                });

            })
            .catch((error) => {
            
                // toast.error('Email already in use', {
                //     position: 'top-center',
                //     style: {
                //         marginTop: '80px',
                //         marginLeft: '10px',

                //         border: '1px solid red',

                //     }
                // })

                    setOk("Email already in use ")

            })


    }
    return (



        <div className="hero min-h-screen ">
         <Helmet>
                <title>Brite || Register</title>
            </Helmet>



            <div className="animate__animated animate__bounceInDown animate__delay-0.99s hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-[500px] max-w-sm  bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <p className='lg:text-4xl  md:text-4xl text-2xl mb-5 pb-4  border-b border-black font-semibold  '>Create a Account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            {
                                ok && <p className=' ml-3 text-red-500'>{ok}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                                <input type={eye ? 'text' : 'password'} name='password' placeholder="password" className="input w-full input-bordered" required /><div className='absolute mt-4 left-[325px]'>{eye ? <p onClick={() => setEye(!eye)}><FaEyeSlash /></p> : <p onClick={() => setEye(!eye)}><FaEye /></p>}</div>

                            </div>

                            {
                                okk && <p className=' ml-2 text-red-500'>{okk}</p>
                            }
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Your photoURL" className="input input-bordered" required />
                            <p className='mt-6 ml-3'>Already have an account?<Link className='ml-2 text-blue-500 underline font-semibold hover:text-blue-600' to={'/login'} >Sign In</Link ></p>

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Register</button>

                        </div>


                        {/* <Toaster></Toaster> */}
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Register;