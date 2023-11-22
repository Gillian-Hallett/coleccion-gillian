//Gillian Hallett Caballero
import React from "react"
import Barra from "./Barra"

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Tooltip } from '@mui/material'
import { useState } from 'react';
import InformeColeccion from "./InformeColeccion";

function Informe() {

    const navigate = useNavigate()
    const userData = useSelector(state => state.login)

    const isLoggedin = userData.isAutenticated
    const [sus, si] = useState('')
    const [no, nos] = useState(false)

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
        }
    }, [isLoggedin, navigate])

    const dato = (e) => {
        nos(true)
        console.log(no)
    }

    return <>
        <Barra />
        <Grid container>
            <Grid item xs={5} md={5} />
            <Grid item xs={2} md={2}>
                <Tooltip title="Informe Colección" arrow>
                    <Button size="large" color="info" variant="contained" onClick={dato}> INFORME COLECCIÓN</Button>
                </Tooltip>
            </Grid>
        </Grid>

        {no && <InformeColeccion nose={sus} />}
    </>
}

export default Informe