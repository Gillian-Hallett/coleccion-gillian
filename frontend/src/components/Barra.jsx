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
import { Tooltip } from '@mui/material'

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'


function Barra() {

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

    return <>
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

                            {userData.userRol === 'invitado' &&
                                <InsertEmoticonIcon />

                            }
                            <Typography sx={{ display: 'inline' }}> {userData.userName}</Typography>
                        </Grid>

                        <Grid item xs={3} md={1} lg={2}>
                            <Link to='/home' style={{ color: "rgb(13, 22, 99)" }}>Inicio</Link>
                        </Grid>

                        {userData.userRol === 'admin' &&
                            <Grid item xs={3} md={1} lg={2}>
                                <Link to='/informe' style={{ color: "rgb(13, 22, 99)" }}>Informe</Link>
                            </Grid>
                        }

                        <Grid item xs={3} md={1} lg={2}>
                            <Link to='/GestionUsu' style={{ color: "rgb(13, 22, 99)" }}>Gestion</Link>
                        </Grid>

                        <Grid item xs={3} md={1} lg={1}>
                            <Link to='/Hallett_Caballero_Gillian_EXUT4_Manual.PDF' target='_blank' style={{ color: "#13208e" }}>Ayuda</Link>
                        </Grid>

                        <Grid item xs={1} md={1} lg={1}>
                            <Tooltip title="Salir" arrow>
                                <Button size="large" color="info" variant="contained" onClick={handleLogout}>Salir</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar >
    </>
}

export default Barra