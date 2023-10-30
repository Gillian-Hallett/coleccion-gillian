// GILLIAN HALLETT CABALLERO
import Paper from '@mui/material/Paper';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { TextField }from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';

function Ut2 (){
    const [us,setUsu] = useState('')
    const [pas,setPas] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log (us, pas)
        if (us.length !== 0 && pas.length !== 0 ){
            fetch(`http://localhost:3030/login?user=${us}&password=${pas}`)
            .then(response => response.json())
            .then(response => { 
                if (response){
                    if(Object.keys(response.data).length === 0){
                        console.log('Datos incorrectos') 
                    }else {
                        console.log(response)
                    }
                }
            })
            console.log (`http://localhost:3030/login?user=${us}&password=${pas}`)
        } else{
            console.log ('Campos vacios.')

        }
    }
    return(
        <Grid container justifyContent={"center"} alignItems={"center"} style={{minHeight:"100vh"}}>
            <Grid item xs={3} md={3} l={2} xl={2}>
                <Paper>
                    <Grid container justifyContent={"center"} alignItems={"center"}>
                        <Avatar>
                            <LoginIcon color='divider'></LoginIcon>
                        </Avatar>
                       <Box onSubmit={handleSubmit} component={'form'}>
                            <Typography variant="h2" color="primary" > Login</Typography>
                            <TextField id='usuario' label='usuario' fullWidth autoFocus onChange={(e) => { setUsu(e.target.value) }} />
                            <TextField id='contrasena' label='contraseña' type='password' fullWidth autoFocus onChange={(e) => { setPas(e.target.value) }}/>
                            <Button id='boton' type='submit'>Iniciar sesion</Button>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default Ut2;