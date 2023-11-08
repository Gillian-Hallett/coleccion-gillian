//Gillian Hallett Caballero
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux'
import store from './store/index'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fb080c',
    },
    secondary: {
      main: '#09f500',
    },
    divider: '#fb060a',
    text: {
      primary: '#d3f307',
      secondary: 'rgba(0,0,0,0.7)',
      disabled: 'rgba(181,105,105,0.5)',
    },
    error: {
      main: '#37f436',
      dark: '#101010',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    success: {
      main: '#f50606',
    },
    background: {
      paper: 'rgba(88,83,83,0.62)',
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