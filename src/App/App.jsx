import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../components/Home/Home.jsx';
import MapPage from '../pages/MapPage/MapPage.jsx';

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