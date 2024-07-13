import React from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from '../components/Home/Home.js';
import MapPage from '../pages/MapPage/MapPage.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/:mapName",
        element: <MapPage/>
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;