import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import Allcards from './Allcards';
import Ext from './Ext';
import { Helmet } from 'react-helmet-async';

const Allcountry = () => {
    const data =useLoaderData()
    const country=useParams()
    //console.log(data)
    const  card=data.filter(d=>d.Country===country.Country)
    //console.log(card)
    return (
        <div className="  flex justify-center gap-4 w-full lg:w-[1200px] mx-auto my-10">
            <Helmet>
                <title>Brite || All Country</title>
            </Helmet>
        {card.map((d)=><Ext  data={d}></Ext>)}
    </div>
    );
};

export default Allcountry;