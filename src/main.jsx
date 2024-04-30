import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  
  RouterProvider,
} from "react-router-dom";
import Navbar from './componants/Nav';
import Nav from './componants/Nav';
import Route from './componants/Route';
import Home from './componants/Home';
import Authentication from './componants/Authentication';
import { HelmetProvider } from 'react-helmet-async';
import Login from './componants/Login';
import Register from './componants/Register';
import Error from './componants/Error';
import Add from './componants/Add';
import PrivateRoute from './componants/PrivateRoute';
import List from './componants/List';
import Details from './componants/Details';
import Spot from './componants/Spot';
import Updatae from './componants/Updatae';
import Allcountry from './componants/Allcountry';
import Countrycard from './componants/Countrycard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children:[
      // {
      //   path:"/",
      //   loader:()=>fetch(`https://b9a10-server-side-safwan169-a2m3bwiso-safwan-hossains-projects.vercel.app//ad`),
      //   element:<Home></Home>
      // },
      {
        path:"/login",
        element:<Login></Login>
      },{
        path:"/register",
        element:<Register></Register>
      },{
        path:"/add",
        element:<PrivateRoute><Add></Add></PrivateRoute>
      },{
        path:"/list",
        loader:()=>fetch(`https://b9a10-server-side-safwan169-8vft2dmxe-safwan-hossains-projects.vercel.app/ad`),

        element:<PrivateRoute><List></List></PrivateRoute>
      }
      ,{
        path:"/ad/:_id",
        loader:()=>fetch(`https://b9a10-server-side-safwan169-a2m3bwiso-safwan-hossains-projects.vercel.app//ad`),

        element:<PrivateRoute><Details></Details></PrivateRoute>
      },{
        path:"/spot",
        loader:()=>fetch(`https://b9a10-server-side-safwan169-iumlyw8ko-safwan-hossains-projects.vercel.app//ad`),

        element:<PrivateRoute><Spot></Spot></PrivateRoute>
      } ,{
        path:"/update/:id",
        // loader:()=>fetch(`https://b9a10-server-side-safwan169-7ipd5wlc9-safwan-hossains-projects.vercel.app/ad`),

        element:<PrivateRoute><Updatae></Updatae></PrivateRoute>
      },{
        path:"/country/:Country",
        loader:()=>fetch(`https://b9a10-server-side-safwan169-a2m3bwiso-safwan-hossains-projects.vercel.app//country`),

        // loader:({params})=>fetch(`https://b9a10-server-side-safwan169-mwvtb8ury-safwan-hossains-projects.vercel.app/country/${params.Country}`),

        element:<PrivateRoute><Allcountry></Allcountry></PrivateRoute>
      },
    ]
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  

    <Authentication>
  <RouterProvider router={router} />
  </Authentication>

   

  </React.StrictMode>,
)
