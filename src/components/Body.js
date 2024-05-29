import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const Body = () => {

 
  

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
    ]);



  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body