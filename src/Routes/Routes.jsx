import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import HomeNews from '../Components/MainSectionComponents/HomeNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Components/MainSectionComponents/Login';
import SingUp from '../Components/MainSectionComponents/SingUp';
import NewsDetails from '../Components/MainSectionComponents/NewsDetails';
import PrivetRoutes from './PrivetRoutes';

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"categorise/01"} ></Navigate>
            },
            {
                path:"categorise/:id",
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element:<HomeNews></HomeNews>
            }
        ]
    },
    {
        path:"/news-details/:id",
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element:<PrivetRoutes><NewsDetails></NewsDetails></PrivetRoutes>
    },
    {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/reg",
                element:<SingUp></SingUp>
            }

        ]
    },
    {
        path:"*",
        element:<div>Error</div>
    },
   
])
export default router;