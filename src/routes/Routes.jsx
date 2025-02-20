import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './../pages/Add';
import Recorded from './../pages/Recorded';
import Edit from '../pages/Edit';
import PrivateRoute from './PrivateRoute';
import Mainlayout from '../component/Mainlayout';
import Home from '../component/Home';

const Routes = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Mainlayout></Mainlayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path: 'add-task',
                    element: <PrivateRoute><Add/></PrivateRoute>
                },
                {
                    path: 'recorded-task',
                    element: <PrivateRoute><Recorded/></PrivateRoute>
                },
                {
                    path: 'recorded-task/:id',
                    element: <Edit />,
                    loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/tasks/${params.id}`) 
                },
            ]
        },
        

    ])
    return (
        <RouterProvider router={route}/>
            
    );
};

export default Routes;