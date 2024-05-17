import React, { useContext } from 'react';
import "animate.css"
import Swal from 'sweetalert2';
import { myContext } from './Authentication';
import { Helmet } from 'react-helmet-async';
// import { useParams } from 'react-router-dom';

const Add = () => {
    // //console.log(id)
    // const user=useContext(myContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        // //console.log(e.target.options.value)
        const email=e.target.email.value;
        const name=e.target.name.value;
        const Country =e.target.Country .value;
        const spot=e.target.spot.value;
        const location=e.target.location.value;
        const visitors=e.target.visitors.value;
        const cost=e.target.cost.value;
        const time=e.target.time.value;
        const url=e.target.url.value;
        const options=e.target.options.value;
        const description=e.target.description.value;
        //console.log(email,name,options,description)
        const user={email,name,options,description,time,url,cost,visitors,location,spot,Country}
        // send data to the server
        fetch("https://b9a10-server-side-safwan169.vercel.app/ad", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if(data.insertedId){

                    Swal.fire({
                        title: "Good job!",
                        text: "You have successfully added a spot",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
    
                      });  
                }

            })}
    return (
        <div  className=' animate__animated  animate__zoomIn animate__delay-0.99s my-10  lg:w-[1200px] mx-auto'>
            <Helmet>
                <title>Brite || Add Spot </title>
            </Helmet>
            <div className='text-center  w-svw lg:w-full mt-20 '>
                <div className=' justify-center mb-10 flex'>
                    <p className='text-2xl font-bold  mb-4 border-b-2 pb-4 px-4 border-black w-max  text-center '>Add Tourist Spot</p>

                </div>
                <form onSubmit={handleSubmit} >

                    <div className='flex gap-5  justify-center  '>
                        <span className='w-full lg:w-1/2'>
                            {/* <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="w-full input input-bordered" required /> */}

                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <label class="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" name='email' className="w-full " required placeholder="Email" />
                            </label>
                        </span>
                        <span className=' w-1/2'>
                            {/* <label className="label">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="w-full  input input-bordered" required /> */}
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                            <label class="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" name='name' class="w-full" placeholder="Username" />
                            </label>
                        </span>
                    </div>
                    <div className='flex gap-5  justify-center  '>
                        <span className='w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Country Name </span>
                            </label>
                            <input type="text" name='Country' placeholder="Country Name" className="w-full input input-bordered" required />
                        </span>
                        <span className=' w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Tourists Spot Name</span>
                            </label>
                            <input type="text" name='spot' placeholder="Tourists Spot Name" className="w-full  input input-bordered" required />
                        </span>
                    </div>
                    <div className='flex gap-5  justify-center  '>
                        <span className='w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Location </span>
                            </label>
                            <input type="text" name='location' placeholder="Location" className="w-full input input-bordered" required />
                        </span>
                        <span className=' w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Total Visitors Per Year</span>
                            </label>
                            <input type="number" name='visitors' placeholder=" Visitors Per Year" className="w-full  input input-bordered" required />
                        </span>
                    </div>
                    <div className='flex gap-5  justify-center  '>
                        <span className='w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Average Cost </span>
                            </label>
                            <input type="text" name='cost' placeholder="Average Cost" className="w-full input input-bordered" required />
                        </span>
                        <span className=' w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Travel Time</span>
                            </label>
                            <input type="text" name='time' placeholder="Travel Time" className="w-full  input input-bordered" required />
                        </span>
                    </div>
                    <div className='flex gap-5  justify-center  '>
                        <span className='w-1/2'>
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo URL </span>
                            </label>
                            <input type="url" name='url' placeholder="Photo Url" className="w-full input input-bordered" required />
                        </span>

                        <span className='w-1/2'>
                            <label className="label">
                                <span for="cars" className="label-text text-xl font-semibold">seasonality </span>
                            </label>
                            <select name='options' className="select border-1 border-gray-300 w-full ">
                                <option disabled selected>Seasonality</option>
                                <option value={"Summer"}>Summer</option>
                                <option value={"Winter"}>Winter</option>

                            </select>
                        </span>

                    </div>
                    <div>
                        <label className="label">
                            <span for="cars" className="label-text text-xl font-semibold">Description  </span>
                        </label>
                        <textarea name='description' className="textarea  w-full  border-gray-300 h-24" placeholder="Write Something ... "></textarea>

                    </div>
                    <button className='mt-8  btn w-1/2 mx-auto text-2xl font-semibold text-white p-2 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 '>Add Item</button>

                </form>
            </div>
        </div>
    );
};

export default Add;