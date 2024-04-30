import React, { useContext, useState } from 'react';
import { myContext } from './Authentication';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const List = () => {

  const data = useLoaderData()
  const auth = useContext(myContext)
  const { user } = auth
  console.log(user.reloadUserInfo.email
  )
  // console.log(data[0].email)
  const match = data.filter(d => d.email === user.reloadUserInfo.email)
  const [datas,setDatas]=useState(match)
  console.log(datas)


    const navigate = useNavigate()
    const handleUpdate = (d) => {
      console.log(d.d._id)
      const id = d.d._id
      navigate(`/update/${id}`)
  
  
  
    }
    const handleDelate = (d) => {
      console.log(d.d._id)
      const id = d.d._id
      // navigate(`/update/${id}`)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
  
  
          fetch(`https://b9a10-server-side-safwan169-gynsee8il-safwan-hossains-projects.vercel/de/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Spot has been deleted.',
                  'success'
                )
              const remaining = match.filter(ma => ma._id !== id);
              setDatas(remaining);
              }})}})}
      





   
    // const {Country,spot,cost}=match;
    return (
      <div className='my-20'>
        <Helmet>
                <title>Brite || List</title>
            </Helmet>
        <div className="overflow-x-auto">
          <table className="table  ">
            {/* head */}
            <thead className='border-b-2'>
              <tr>
                <th></th>
                <th>Country</th>
                <th>Spot-Name</th>
                <th>Cost</th>
              </tr>
            </thead>

          
            {datas.map(d => <tbody  className=''>
              {/* row 1 */}
              <tr>
                <th>{d.length}</th>
                <td>{d.Country}</td>
                <td>{d.spot}</td>
                <td>{d.cost}</td>
                <span><button onClick={() => handleUpdate({ d })} className='btn bg-green-400 text-white font-bold'>Update</button></span>
                <span><button onClick={() => handleDelate({ d })} className='btn ml-3 bg-red-500 text-white font-bold'>delate</button></span>
              </tr>


            </tbody>)}
          </table>
          <div className=' w-full'>
            {/* {datas.Country ||<div className=' w-full text-center text-4xl my-10 text-gray-500 font-semibold'>No data added</div>} */}

            </div>
        </div>
      </div>
    );
  };

  export default List;