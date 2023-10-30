//Gillian Hallett Caballero
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Login() {
  const handleAlert = () => {
    alert('¡Hiciste clic en el botón!');
  };

  return (
    <Container style={{ backgroundColor: 'black' }}>
      <Typography variant="h1" color="primary">
        Título H1
      </Typography>
      <Typography variant="h2" color="secondary">
        Título H2
      </Typography>
      <Typography variant="h3" color="textPrimary">
        Título H3
      </Typography>
      
      <Button variant="text" color="primary">
        Texto
      </Button>
      <Button variant="contained" color="secondary">
        Contenido
      </Button>
      <Button variant="outlined" color="error">
        Esquema
      </Button>

      <Button variant="contained" color="primary" onClick={handleAlert}>
        Mostrar Alerta
      </Button>
    </Container>
  );
}

export default Login;
