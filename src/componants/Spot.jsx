import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcards from './Allcards';

const Spot = () => {
    const data=useLoaderData()
    console.log(data)

    return (
        <div className="lg:grid  lg:grid-cols-3 justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
            {data.map((d)=><Allcards  data={d}></Allcards>)}
        </div>
    );
};

export default Spot;