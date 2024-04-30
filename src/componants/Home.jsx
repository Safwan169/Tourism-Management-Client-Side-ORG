// import React from 'react';
import { useLoaderData } from 'react-router-dom';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Card from './Card';
import Countrycard from './Countrycard';


const Home = () => {
   

    const data = useLoaderData()
console.log(data)

    const slicedData = data.slice(0, 6);
console.log(data)

    // console.log(data2)
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[0].url} alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[1].url} alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[2].url} alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[3].url} alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[4].url} alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' w-full bg-cover h-svh lg:h-[650px]' src={data[5].url} alt="" /></SwiperSlide>

            </Swiper>
            <div className='text-center text-4xl font-semibold my-20  flex justify-center '>
                <span className='border-b-2 px-6 italic  pb-4 w-max'>Tourists Spots</span>
            </div>
            <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                {
                    slicedData.map((d, id) => <Card idx={id} data={d}></Card>)
                }
            </div>
            <div className='text-center text-4xl font-semibold my-20  flex justify-center '>
                <span className='border-b-2 px-6 italic  pb-4 w-max'>Countries</span>
            </div>
            <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                {
                    slicedData.map((d, id) => <Countrycard idx={id} datas={d}></Countrycard>)
                }
            </div>

            <div className='  lg:ml-20 text-4xl border-b-2 pb-4 px-4 border-blue-300 w-max font-semibold mb-10  mt-28  '>
                <span className=' mb-4 pb-4 '>Trending destinations
                </span>
                <p className=' font-light text-xl italic'>Most popular choices for travelers
                </p>
            </div>
            <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                {
                    slicedData.map((d, id) => <Countrycard idx={id} datas={d}></Countrycard>)
                }
            </div>

        </>
    );
};

export default Home;