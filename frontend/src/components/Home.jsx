//Gillian Hallett Caballero
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../store/storelogin'
import { Button, Tooltip } from '@mui/material'
import { Grid, Paper, Box, TextField } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Barra from './Barra'

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
        handleGetItem()
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

    const [tableData, setTableData] = useState([])


    const handleSaveItem = (e) => {

        fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)

            .then(response => response.json())
            .then(response => {
                if (response > 0) {
                    handleGetItem()
                    alert('Datos guardados con éxito')
                } else {
                    alert('Datos no guardados')
                }
            })
        item.nombre = ""
        item.marca = ""
        item.tipo = ""
        item.precio = ""
    };

    const handleDeleteItem = (id) => {

        fetch(`http://localhost:3030/deleteItem?id=${id}`)

            .then(response => response.json())
            .then(response => {
                if (response < 0) {
                    alert('Datos no eliminados')
                } else {
                    handleGetItem()
                    alert('Datos eliminados')
                }
            })
    };

    const handleGetItem = async (e) => {

        const response = await fetch(`http://localhost:3030/getItems`)

            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (Object.keys(response.data).length !== 0) {
                    setTableData(response.data)
                }
            })
    };


    return <>
        <Barra />

        <Paper elevation={0} >
            <Box component='form' autoComplete='off' onSubmit={handleSaveItem} >
                <Grid container spacing={1}>
                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Nombre'
                            required
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
                    <Grid item xs={5} md={5} />
                    <Grid item xs={2} md={2}>
                        <Tooltip title="Insertar" arrow>
                            <Button size="large" color="info" variant="contained" onClick={handleSaveItem}>Insertar</Button>
                        </Tooltip>
                    </Grid>
                </Grid>

            </Box>
        </Paper>

        <TableContainer>
            <Table aria-label='Base de datos'>
                <TableHead>
                    <TableRow>
                        <TableCell ></TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Marca</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Tooltip title="Borrar" arrow>
                                    {userData.userRol === 'admin' ?
                                        <Button onClick={() => handleDeleteItem(row.id)}>
                                            <DeleteForeverIcon />
                                        </Button>
                                        :
                                        <Button disabled>
                                            <DeleteForeverIcon />
                                        </Button>
                                    }
                                </Tooltip>
                            </TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.marca}</TableCell>
                            <TableCell>{row.tipo}</TableCell>
                            <TableCell>{row.precio}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    </>
}
export default Home
