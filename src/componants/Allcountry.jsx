import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import Allcards from './Allcards';
import Ext from './Ext';

const Allcountry = () => {
    const data =useLoaderData()
    const country=useParams()
    console.log(country)
    const  card=data.filter(d=>d.Country===country.Country)
    // console.log(data)
    return (
        <div className="  flex justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
        {card.map((d)=><Ext  data={d}></Ext>)}
    </div>
    );
};

export default Allcountry;