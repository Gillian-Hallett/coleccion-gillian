//Gillian Hallett Caballero
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../store/storelogin'
import { Button, Typography } from '@mui/material'
import { AppBar, Grid, Toolbar, Container } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom'


function Barra(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Almacenamos en la variable userData el estado del store
    const userData = useSelector(state => state.login)

    const handleLogout = (e) => {
        // Despachar una acción para cambiar el estado a "logout"
        dispatch(loginActions.logout());

        // Navegar a la página raíz ("/")
        navigate('/');
    };

    return<>
     <AppBar position='static'>
        <Container>
            <Toolbar>
                <Grid container>
                    <Grid item xs={1} md={2} lg={3}>
                        {userData.userRol === 'admin' ?
                            <VpnKeyIcon />
                            :
                            <LoginIcon />
                        }
                        <Typography sx={{ display: 'inline' }}> {userData.userName}</Typography>
                    </Grid>

                    <Grid item xs={3} md={1} lg={2}>
                        <Link to='/home'>Inicio</Link>
                    </Grid>

                    {userData.userRol === 'admin' &&
                        <Grid item xs={3} md={1} lg={2}>
                            <Link to='/informe'>Informe</Link>
                        </Grid>
                    }
                    <Grid item xs={3} md={1} lg={3}>
                        <Link to='/home'>Ayuda</Link>
                    </Grid>

                    <Grid item xs={1} md={1} lg={1}>
                        <Button size='large' color='secundary' variant='container' onClick={handleLogout}>Salir</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    </AppBar >
    </>
}

export default Barra