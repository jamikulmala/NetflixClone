import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
    palette: {
        type: 'dark',
        background: {
          default: '#000000',
          paper: '#141414',
        },
        primary: {
          main: '#e50914',
        },
        secondary: {
          main: '#b9090b',
        },
        text: {
          primary: '#FFFFFF',
          secondary:'#B8B8B8',
        },
      },
      typography: {
        fontFamily: [
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    });