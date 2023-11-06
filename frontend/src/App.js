import React from 'react'
import './App.css';
import Ut2 from './components/Ut2'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
//HACERLO
const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Ut2 />
            },
            {
                path: 'home',
                element: <Home />
            }
        ]
    }
])
function App() {
    return (
        <RouterProvider router={router} />
        //<Login/>
    );
}
export default App;