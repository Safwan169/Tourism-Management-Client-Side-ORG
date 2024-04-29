import React from 'react';
import "animate.css"
import { CiLocationOn } from "react-icons/ci";

import { FaChartArea, FaCheckCircle } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

import { useLoaderData } from 'react-router-dom';
const Countrycard = ({datas}) => {
    const navigate = useNavigate()
    // const datas=useLoaderData()

    const details = (Country) => {
        navigate(`/country/${Country}`)

    }
    const { description, Country, url } = datas
    return (
        <div onClick={() => details(Country)} data-aos="zoom-in-left ">
            <div className="hd shadow-2xl w-full  h-min lg:w-[378px]  lg:pl-0 1 rounded-2xl mt-4 lg:mt-0">
                <div className="card card-compact flex items-center mt-4 lg:mt-0  bg-base-100 text-center  shadow-xl h-[550px] ">
                    <figure className="w-[230px] md:w-[500px] lg:px-1 lg:w-[375px] lg:mx-auto"><img className="hero-overlay bg-opacity-60  mt-5 lg:mt-0 lg:w-full h-[240px] bg-cover rounded-xl  " src={url} alt="image" /></figure>
                    <div className="card-body  w-full ">
                        <div className="h-[50px] ">
                            <p className="text-3xl font-semibold w-[339px] md:w-full md:text-center text-blue-500 lg:text-start  hv text-start ml-2  ">{Country}</p>
                            <div className='  italic  text-orange-400   mt-10 text-2xl font-normal w-[339px] md:w-full   hv text-start '>{description}</div>

                        </div>
                        {/* <div className="md:flex lg:flex-col md:justify-between">
                            <div className=" h-[108px] lg:w-full md:w-1/2">


                                <div className="text-gray-500 flex lg:flex  md:h-fit lg:w-full   lg:items-center items-center  lg:justify-between  w-[330px]  text-xl font-bold  text-start ">
                                    <p className="text-2xl font-semibold  text-blue-500  text-start ml-4  ">{cost}</p>
                                    <span className="flex items-center gap-3 ml-10 md:ml-4 lg:mt-0 "><IoTimeOutline />
                                        {time}


                                    </span>

                                </div>




                                <div className="text-gray-500 font-bold flex mt-5 lg:text-xl w-[300px] gap-2 text-start ml-4 ">
                                    <CiLocationOn className="mt-1 text-black" />
                                    <span className=''>Location : {location}</span>
                                </div>

                            </div>
                            <div >
                                <p className="text-xl text-start ml-4 mt-4 font-bold text-amber-600">visitors : <span className='text-black'>{visitors} <span className='text-red-400'>per yer</span></span></p></div>
                            <div >
                                <p className="text-xl text-start ml-4 mt-4 font-bold text-sky-400">Seasonality : <span className='text-black'>{options}</span></p>


                            </div>
                        </div> */}
                        {/* <div data-aos="zoom-in-up" className="flex mt-3  justify-end w-[350px] md:w-full  text-green-500 font-bold">
                            <button onClick={()=>details(_id)} className="btn bg-orange-500 rounded-2xl text-white hover:bg-orange-600 font-semibold">view Details</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Countrycard;