import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { myContext } from './Authentication';
import Lottie from 'lottie-react';
import loader from '../../public/loader.json'
const PrivateRoute = ({children}) => {
    const data=useContext(myContext)
    const {user,loading}=data
    //console.log(user)
    if (loading) {
        return <Lottie animationData={loader}></Lottie>
    }
   else if (user) {
    return children
    
   }
   else {
   return <Navigate to={'/login'}></Navigate>}
};

export default PrivateRoute;