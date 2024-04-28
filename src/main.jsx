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
      },{
        path:"/add",
        element:<PrivateRoute><Add></Add></PrivateRoute>
      },{
        path:"list",
        element:<PrivateRoute><List></List></PrivateRoute>
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
