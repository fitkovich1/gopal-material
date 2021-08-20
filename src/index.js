import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const theme = createTheme({
  palette: {
    primary: {
      main: '#45AEBF',
    },
    secondary: {
      main: '#1AAE9F',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
    textPrimary: "#293845"
  },
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
  ,document.getElementById('root'));
