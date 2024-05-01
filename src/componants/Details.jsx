import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CiLocationOn } from 'react-icons/ci';
import { FaChartArea } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData()
    const user = useParams()
    console.log(user)
    console.log(data)
    const last = data.find(d => (d._id) == user._id);
    console.log(last)
    const { options, description, time, url, cost, visitors, location, spot, Country } = last

    return (
        <div>
            <Helmet>
                <title>Brite || Details</title>
            </Helmet>
            <div className=''>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:gap-10 my-6 lg:h-[500px] lg:flex-row">
                        <img src={url} className="w-[425px] lg:h-[500px]  bg-cover py-4 md:py-0 lg:py-0 rounded-lg shadow-2xl" />
                        <div className=' text-left p-2 pt-10 '>
                            <h1 className="text-5xl font-bold">{spot}</h1>
                            <p className="font-semibold lg:text-3xl lg:mt-3  text-lime-600">{ Country}</p>
                            <p className="text-left mt-6 lg:text-xl  "><span className='font-bold'>Description :</span><span className='text-gray-500  lg:text-xl font-medium'> {description}</span></p>
                            {/* clear */}
                            <div className="flex-col flex md:flex-row lg:flex-row lg:gap-20 md:gap-20">
                                <div className=''>
                                    <div className="flex gap-20 lg:flex-row md:flex-row md:gap-20 lg:gap-20 my-4 "><p className='text-2xl font-semibold  text-blue-500  text-start md:ml-1 lg:ml-1'>{cost}</p>
                                        <p className='flex items-center gap-3  lg:ml-10 text-gray-500 text-xl md:ml-10 font-bold lg:mt-0 '><IoTimeOutline />{time}</p></div>
                                    <div className='flex-col flex lg:gap-10 gap-4 md:gap-10 lg:flex-row md:flex-row md:ml-1 lg:ml-1'>
                                       
                                        <p className='text-xl text-gray-500 font-bold flex gap-2'><CiLocationOn className="mt-1  text-black" />{location}</p>

                                    </div>
                                    <div className="flex my-6 lg:md:gap-10 gap-10 md:ml-7 lg:ml-7">
                                        <p data-aos="slide-right" className=" text-white text-2xl bg-lime-700 rounded-md lg:md:px-3 px-2 py-4 lg:md:py-1 font-semibold ">Seasonality</p>
                                        <p data-aos="slide-left" className="   text-bold text-3xl text-orange-400 px-3 py-1 font-semibold "> {options}</p>


                                    </div>
                                </div>
                                <div className="  flex-col  lg:flex-row  pt-5  md:flex-row md:items-start  gap-5 flex text-gray-500" >
                                    <span>
                                        <p data-aos="slide-right" className=" text-white text-2xl bg-lime-700 rounded-md lg:md:px-3 px-2 py-4 lg:md:py-1 font-semibold ">visitors</p>

                                    </span>
                                    {/* <span className='flex-row flex lg:flex-col md:flex-col  gap-6'>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[0]}</p>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[1]}</p>
                                        <p className=" font-bold flex gap-2"><span className=" font-extrabold"><FaCheckCircle className="text-green-500 font-extrabold" /></span> {give.facilities[2]}</p>

                                    </span> */}
                                    <span  className=' mb-5 items-center font-bold text-xl'><span className=''>{visitors}</span> <span className='text-4xl text-red-400'>/Year</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Details;