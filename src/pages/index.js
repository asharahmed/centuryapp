import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Visualization from './visualization';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import {CssBaseline } from '@mui/material';


const theme = createTheme({
  palette: {
    background: {
      default: '#fff', // Set a default background color
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Visualization
          </Typography>
          <Visualization />
        </CardContent>
      </Card>
    </div>
  );
}

export default function ThemedApp() {
  return (
    
    <ThemeProvider theme={theme}>
      <Header/>
      <App />
    </ThemeProvider>
  
  );
}
