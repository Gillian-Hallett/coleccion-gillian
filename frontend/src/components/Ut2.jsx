// GILLIAN HALLETT CABALLERO
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Box, Tooltip } from '@mui/material';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';

import { useNavigate } from 'react-router-dom';

//Importamos el useDispatch del react-redux
import { useDispatch } from 'react-redux'
//Importamos el componente loginActions que está en el fichero storelogin.js
import { loginActions } from '../store/storelogin';


function Ut2() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [us, setUsu] = useState('')
    const [pas, setPas] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(us, pas)
        if (us.length !== 0 && pas.length !== 0) {
            fetch(`http://localhost:3030/login?user=${us}&password=${pas}`)
                .then(response => response.json())
                .then(response => {
                    if (response) {
                        if (Object.keys(response.data).length === 0) {
                            console.log('Datos incorrectos')
                            alert('Credenciales incorrectas, vuelva a intentarlo.')
                        } else {
                            console.log(response)
                            if (response.data !== undefined) {
                                console.log('entro, hago el dispatch y luego navego')
                                //aquí pongo el dispatch para cambiar el estado a login en el store del redux
                                dispatch(loginActions.login({
                                    name: response.data.nombre,
                                    rol: response.data.rol
                                }))
                                navigate('/home')
                            }

                        }
                    }
                })
            console.log(`http://localhost:3030/login?user=${us}&password=${pas}`)
        } else {
            console.log('Campos vacios.')

        }
    }
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} style={{ minHeight: "100vh" }}>
            <Grid item xs={3} md={3} l={2} xl={2}>
                <Paper>
                    <Grid container justifyContent={"center"} alignItems={"center"}>
                        <Avatar>
                            <LoginIcon color='divider'></LoginIcon>
                        </Avatar>
                        <Box onSubmit={handleSubmit} component={'form'}>
                            <Typography variant="h2" color="primary" > Login</Typography>
                            <TextField required id='usuario' label='usuario' fullWidth autoFocus onChange={(e) => { setUsu(e.target.value) }} />
                            <TextField required id='contrasena' label='contraseña' type='password' fullWidth autoFocus onChange={(e) => { setPas(e.target.value) }} />
                            <Grid container>
                                <Grid item xs={3} md={3} />
                                <Grid item xs={8} md={8}>
                                    <Tooltip title="Iniciar sesión" arrow>
                                        <Button id='boton' type='submit' variant="contained">Iniciar sesion</Button>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default Ut2;