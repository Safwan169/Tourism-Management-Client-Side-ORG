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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/register",
        element:<Register></Register>
      }
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
