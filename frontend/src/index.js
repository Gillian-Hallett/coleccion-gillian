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
      main: '#fffd00',
    },
    secondary: {
      main: '#00f511',
    },
    background: {
      paper: '#ff0004',
    },
    text: {
      primary: '#000ffb',
      secondary: 'rgba(0,0,0,0.7)',
      disabled: '#b77f49',
    },
    error: {
      main: 'rgba(126,244,54,0.47)',
    },
    success: {
      main: '#ff0608',
    },
    divider: '#caff03',
  },
  typography: {
    h1: {
      fontSize: '5.4rem',
      fontWeight: 1000,
      lineHeight: 3,
      letterSpacing: '0.11em',
    },
    h2: {
      fontSize: '4rem',
      fontWeight: 100,
      lineHeight: 1.02,
    },
    h3: {
      fontSize: '2.3rem',
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