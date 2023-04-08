import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Visualization from './visualization';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import '@fontsource/roboto';
import PieChart from './PieChart';
import { useState } from 'react';
import {CssBaseline } from '@mui/material';



const data = [
  {label: 'Canada', value: "2"},
  {label: 'Abroad', value: "1"},
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
    minWidth: '80vw',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
    maxWidth: 900, // Set max width to match first card
    height: '100vh',
   
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  expandedCard: {
    height: 'auto',
  },
}));

const cards = [
  
];

function App() {

  const [expandedCard, setExpandedCard] = useState(null);

  const classes = useStyles();

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      // If the clicked card is already expanded, collapse it
      setExpandedCard(null);
    } else {
      // Otherwise, expand the clicked card
      setExpandedCard(index);
    }
  };

  const isExpanded = (index) => expandedCard === index;

  const handleClose = () => {
    setExpandedCard(null);
  };

  return (
    <div className={classes.root}>
      

      {cards.map((card, index) => (
        <Card
          key={index}
          className={`${classes.card} ${isExpanded(index) ? classes.expandedCard : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              {card.title}
            </Typography>
            <Typography variant="body1" component="p">
              {card.content}
            </Typography>
          </CardContent>
          {isExpanded(index) && (
            <CardActions>
              <Button size="small" onClick={handleClose}>
                Close
              </Button>
            </CardActions>
          )}
        </Card>
      ))}


      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Visualization
          </Typography>
          <Visualization />
        </CardContent>
      </Card>

      <Card className={classes.card} style={{height: "35vh"}}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Century Initiative
          </Typography>
          <Typography variant="body1" component="p">
            The Century Initiative is a group of Canadians committed to building a prosperous, vibrant, and globally influential Canada by growing the population to 100 million by 2100.

            <br></br><br></br>
            
            To find out more, visit their website at <a href="https://www.centuryinitiative.ca/">https://www.centuryinitiative.ca/.</a>

            <br></br><b>This web application is not associated with the Century Project.</b>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card} >
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
          By 2040, 1 in 3 Canadians will be immigrants (or have a parent who is)
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
