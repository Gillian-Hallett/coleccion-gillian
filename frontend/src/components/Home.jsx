import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../store/storelogin'
import { Button, Typography } from '@mui/material'

function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Almacenamos en la variable userData el estado del store
    const userData = useSelector(state => state.login)

    //Traza de codigo donde vamos a usar el useEffect
    const isLoggedin = userData.isAutenticated;

    useEffect(()=>{
        if (!isLoggedin){ 
            navigate('/')
        }
    }, [isLoggedin, navigate])

     // Comprobamos por la consola qué obtenemos en userData
     console.log('Datos del usuario en el store:', userData)

     const handleLogout = (e) => {
        // Despachar una acción para cambiar el estado a "logout"
        dispatch( loginActions.logout() );

        // Navegar a la página raíz ("/")
        navigate('/');
    };

    return <>
    <Typography variant='h1'>Página home Gillian Hallett Caballero</Typography>
    <Typography variant='h2'>¡Bienvenido, {userData.userName} Rol: {userData.userRol}!</Typography>
    <Button variant='contained' size='large' color='error' onClick={handleLogout} >Salir</Button>
    </>
    }
    export default Home
    