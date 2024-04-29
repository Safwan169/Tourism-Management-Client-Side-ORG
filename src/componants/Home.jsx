// import React from 'react';
import { useLoaderData } from 'react-router-dom';

import React, { useRef, useState } from 'react';
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


const Home = () => {
    const data = useLoaderData()
    // console.log(data[0])
    const slicedData = data.slice(0, 6);
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
            <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">

                {
                    slicedData.map((d, id) => <Card idx={id} data={d}></Card>)
                }
            </div>
        </>
    );
};

export default Home;