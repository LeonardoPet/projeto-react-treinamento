import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Pages/HomePage.js';
import Register from './Pages/Register.js'
import Login from  './Pages/Login.js'
import AnimesData from './API/AnimesData.js'
import ForgotPassword from './Pages/ForgotPassword.js';
import WatchAnime from './Pages/WatchAnime.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>,
    children:[
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/pageAnime",
        element:<AnimesData/>
      },
      {
        path:"/forgotPassword",
        element:<ForgotPassword/>
      },
      {
        path:"/watch/:name",
        element:<WatchAnime/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


