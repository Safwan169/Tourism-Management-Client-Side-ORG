import React, { useContext, useState } from 'react';
import { myContext } from './Authentication';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const List = () => {
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
  
  
          fetch(`http://localhost:3028/de/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Coffee has been deleted.',
                  'success'
                )
              // const remaining = coffees.filter(cof => cof._id !== _id);
              // setCoffees(remaining);
              }})}})}
      





    const data = useLoaderData()
    const auth = useContext(myContext)
    const { user } = auth
    console.log(user.reloadUserInfo.email
    )
    console.log(data[0].email)
    const match = data.filter(d => d.email !== user.reloadUserInfo.email)
    console.log(match)
    // const {Country,spot,cost}=match;
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Country</th>
                <th>Spot-Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            {match.map(d => <tbody>
              {/* row 1 */}
              <tr>
                <th>{d.length}</th>
                <td>{d.Country}</td>
                <td>{d.spot}</td>
                <td>{d.cost}</td>
                <td><button onClick={() => handleUpdate({ d })} className='btn'>Update</button></td>
                <td><button onClick={() => handleDelate({ d })} className='btn'>delate</button></td>
              </tr>


            </tbody>)}
          </table>
        </div>
      </div>
    );
  };

  export default List;