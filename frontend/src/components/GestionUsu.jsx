//Gillian Hallett Caballero
import React from "react"
import Barra from "./Barra"

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Button, Grid, Tooltip } from '@mui/material'
import { Paper, Box, TextField } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function GestionUsu() {

    const navigate = useNavigate()
    const userData = useSelector(state => state.login)

    const isLoggedin = userData.isAutenticated
    const [sus, si] = useState('')
    const [no, nos] = useState(false)

    const [item, setItem] = useState({ nombre: '', login: '', password: '', rol: '' })

    const [tableData, setTableData] = useState([])


    useEffect(() => {
        if (!isLoggedin) {
            navigate('/')
        } else {
            fetch(`http://localhost:3030/getItems`)

                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (Object.keys(response.data).length !== 0) {
                        si(response.data)
                    }
                })
                handleGetItem()
        }
    }, [isLoggedin, navigate])

    const dato = (e) => {
        nos(true)
        console.log(no)
    }

    const handleSaveItem = (e) => {

        fetch(`http://localhost:3030/addUser?nombre=${item.nombre}&login=${item.login}&password=${item.password}&rol=${item.rol}`)

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
        item.login = ""
        item.password = ""
        item.rol = ""
    };

    const handleGetItem = async (e) => {

        const response = await fetch(`http://localhost:3030/getUser`)

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
        <Grid container>

        </Grid>
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
                            label='Login'
                            value={item.login}
                            onChange={(event) => setItem({ ...item, login: event.target.value })}>
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Password'
                            value={item.password}
                            onChange={(event) => setItem({ ...item, password: event.target.value })}>
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3}>
                        <TextField
                            label='Rol'
                            value={item.rol}
                            onChange={(event) => setItem({ ...item, rol: event.target.value })}>
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item xs={5} md={5} />
                <Grid item xs={2} md={2}>
                    <Tooltip title="Informe" arrow>
                        {userData.userRol === 'admin' ?
                            <Button size="large" color="info" variant="contained" onClick={handleSaveItem}> INFORME</Button>
                            :
                            <Button disabled></Button>
                        }

                    </Tooltip>
                </Grid>
            </Box>
        </Paper>

        <TableContainer>
            <Table aria-label='Base de datos'>
                <TableHead>
                    <TableRow>
                        <TableCell ></TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Login</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Rol</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell ></TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.login}</TableCell>
                            <TableCell>{row.password}</TableCell>
                            <TableCell>{row.rol}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>


    </>

}


export default GestionUsu