//Gillian Hallett Caballero
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux'
import store from './store/index'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6f0871',
      light: '#700873',
    },
    secondary: {
      main: '#142092',
    },
    text: {
      disabled: 'rgba(181,105,105,0.5)',
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#2e7d32',
    },
    info: {
      main: '#2796d2',
    },
    background: {
      default: '#121212',
      paper: '#565353',
    },
  },
  typography: {
    h1: {
      fontSize: '5.4rem',
      fontWeight: 1000,
      letterSpacing: '0.11em',
      lineHeight: 3,
    },
    h2: {
      lineHeight: 1.02,
      fontWeight: 100,
      fontSize: '4rem',
    },
    h3: {
      fontSize: '2.5rem',
      lineHeight: 1.15,
    },
    fontFamily: 'Oswald',
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);