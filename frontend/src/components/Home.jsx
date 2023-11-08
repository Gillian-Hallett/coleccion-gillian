//Gillian Hallett Caballero
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../store/storelogin'
import { Button, Typography } from '@mui/material'
import { AppBar, Grid, Toolbar, Paper, Box, Container, Link, TextField } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    //Almacenamos en la variable userData el estado del store
    const userData = useSelector(state => state.login)

    //Traza de codigo donde vamos a usar el useEffect
    const isLoggedin = userData.isAutenticated;

    useEffect(() => {
        if (!isLoggedin) {
            navigate('/')
        } 
    }, [isLoggedin, navigate])

    // Comprobamos por la consola qué obtenemos en userData
    console.log('Datos del usuario en el store:', userData)

    const handleLogout = (e) => {
        // Despachar una acción para cambiar el estado a "logout"
        dispatch(loginActions.logout());

        // Navegar a la página raíz ("/")
        navigate('/');
    };

    const [item, setItem] = useState({ nombre: '', marca: '', tipo: '', precio: '' })


    const handleSaveItem = (e) => {
        
        fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)
        console.log ('viva españa')
    };

    return <>
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={1} md={2} lg={4}>
                            <AdbIcon />
                            <Typography sx={{ display: 'inline' }}> {userData.userName}</Typography>
                        </Grid>

                        <Grid item xs={3} md={1} lg={2}>
                            <Link to='/home'>Inicio</Link>
                        </Grid>

                        <Grid item xs={3} md={1} lg={2}>
                            <Link to='/home'>Informe</Link>
                        </Grid>

                        <Grid item xs={3} md={0} lg={2}>
                            <Link to='/home'>Ayuda</Link>
                        </Grid>

                        <Grid item xs={3} md={0}>
                            <Button variant='container' onClick={handleLogout}>Salir</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar >

        <Paper elevation={0} >
            <Box component='form' autoComplete='off' onSubmit={handleSaveItem} >
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Nombre' required
                            value={item.nombre}
                            /*Cuando el usuario escriba algo en el TextField nombre, se irá almacenando en el
                           atributo nombre del objeto item*/
                            onChange={(event) => setItem({ ...item, nombre: event.target.value })}>
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Marca'
                            value={item.marca}
                            onChange={(event) => setItem({ ...item, marca: event.target.value })}>
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Tipo'
                            value={item.tipo}
                            onChange={(event) => setItem({ ...item, tipo: event.target.value })}>
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Precio'
                            value={item.precio}
                            onChange={(event) => setItem({ ...item, precio: event.target.value })}>
                        </TextField>
                    </Grid>
                    <Grid item xs={5} md={5}/>
                    <Grid item xs={2} md={2}>
                        <Button size='large' variant="container" onClick={handleSaveItem}>Insertar</Button>
                    </Grid>
                </Grid>
                
            </Box>
        </Paper>
    </>
}
export default Home
