import React from 'react'
import './App.css';
import Ut2 from './components/Ut2'
import Home from './components/Home'
import Informe from './components/Informe'
import GestionUsu from './components/GestionUsu'
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
            },
            {
                path: 'Informe',
                element: <Informe />
            },

            {
                path: 'GestionUsu',
                element: <GestionUsu />
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