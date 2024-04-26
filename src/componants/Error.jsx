import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error)
    return (
        <div>
               <div className='flex-col h-svh  font-bold  flex justify-center gap-5 text-center text-3xl '>
            
       Oops! Something went wrong.
        <p className=''>{error.status}</p>
        <p>{error.statusText}</p>
        <Link to={'/'}><button className=' border border-blue-400 rounded-2xl px-4 text-xl font-medium btn'>Go Back</button></Link>

    </div>
        </div>
    );
};

export default Error;