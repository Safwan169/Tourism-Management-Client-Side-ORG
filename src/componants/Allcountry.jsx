import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import Allcards from './Allcards';
import Ext from './Ext';

const Allcountry = () => {
    const data =useLoaderData()
    const country=useParams()
    console.log(data)
    const  card=data.filter(d=>d.name===country.Country)
    console.log(card)
    return (
        <div className="  flex justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
        {card.map((d)=><Ext  data={d}></Ext>)}
    </div>
    );
};

export default Allcountry;