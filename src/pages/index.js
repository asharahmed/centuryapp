import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Visualization from './visualization';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import '@fontsource/roboto';
import PieChart from './PieChart';
import {CssBaseline } from '@mui/material';



const data = [
  {label: 'Canada', value: "2"},
  {label: 'abroad', value: "1"},
];

const theme = createTheme({ 
  palette: {
    background: {
      default: '#FFFFFF', // Set a default background color
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: theme.palette.primary.main || '#FFFFFF',
  },
  card: {
    minWidth: 900,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
    maxWidth: 900, // Set max width to match first card
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
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Century Initiative
          </Typography>
          <Typography variant="body1" component="p">
            The Century Initiative is a group of Canadians committed to building a prosperous, vibrant, and globally influential Canada by growing the population to 100 million by 2100.

            
            <br></br><br></br>
            
            To find out more, visit their website at <a href="https://www.centuryinitiative.ca/">https://www.centuryinitiative.ca/.</a>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
          By 2040, 1 in 3 Canadians will be immigrants
          </Typography>
          <Typography variant="body1" component="p" className={classes.title}>
            
            By 2040, 1/3 Canadians will be born abroad or have a parent who is.
            <br></br>
            <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/220908/dq220908a-eng.htm">Source: Statistics Canada</a>
            
            </Typography>
          <PieChart data={data}/>
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
