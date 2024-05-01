import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcards from './Allcards';
import { Helmet } from 'react-helmet-async';
import { FaArrowDown } from "react-icons/fa6";


const Spot = () => {
    const data = useLoaderData()
    console.log(data)
    const [dd, setData] = useState(data)

    // console.log(data)
    const short = () => {
        // console.log('dd')
                 const dataArray = Object.values(data);

    const sortedData = dataArray.sort((a, b) => b.cost - a.cost);
    setData(sortedData)

        // console.log(dd.cost)
    }
    const min = () => {
        // console.log('dd')
                 const dataArray = Object.values(data);

    const sortedData = dataArray.sort((a, b) => a.cost - b.cost);
    setData(sortedData)

        // console.log(dd.cost)
    }

   

    return (

        <>
         <details className="dropdown  left-40">
                <summary className="m-1 btn   bg-green-400 text-white font-semibold">Filter <FaArrowDown />
 </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={()=>short()}>Maximum </a></li>
                    <li><a onClick={()=>min()}>Minimum</a></li>
                </ul>
            </details>
            <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
            <Helmet>
                <title>Brite || All Spot</title>
            </Helmet>

           
            {dd.map((d) => <Allcards data={d}></Allcards>)}
        </div>

        
        </>
      
    );
};

export default Spot;