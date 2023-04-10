import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Visualization from "./visualization";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import "@fontsource/roboto";
import PieChart from "./PieChart";
import { useState } from "react";
import { CssBaseline } from "@mui/material";

const data = [
  { label: "Canada", value: " 2" },
  { label: "Abroad", value: "1" },
];

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF", // Set a default background color
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main || "#FFFFFF",
    overflowY: "scroll",
    minHeight: "100vh",
  },

  bounce: {
    animation: "$bounce 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both",
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateY(0)",
      opacity: 0,
    },
    "60%": {
      transform: "translateY(-5px)",
      opacity: 1,
    },
    "75%": {
      transform: "translateY(10px)",
    },
    "90%": {
      transform: "translateY(-5px)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
  
  

  card: {
    minWidth: "80vw",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
    maxWidth: 900, // Set max width to match first card
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  expandedCard: {
    height: "auto",
  },
  topCard: {
    maxWidth: '100%',
    padding: '0 16px',
    minWidth: "80vw",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main || "#FFFFFF",
    padding: theme.spacing(3),
    marginTop: "auto",
    width: "100%",
  },
}));

const cards = [];


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
          isFirst = index === 0,
        <Card
          key={index}
          className={`${classes.card} ${classes.bounce}`}
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
      <Card className={`${classes.topCard} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Visualization
          </Typography>
          <div style={{ width: '100%', overflowX: 'auto' }}>

          <Visualization />
          </div>
        </CardContent>
      </Card>

      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b>The Century Initiative</b>
          </Typography>
          <Typography variant="body1" component="p">
          <b>ⓘ This web app is not associated with the Century Initative.</b> <a href="https://github.com/asharahmed/centuryapp"><u>Learn more</u>.</a><br/><br/>
            The Century Initiative is a group of Canadians committed to building a prosperous, vibrant, and globally influential Canada by growing the population to 100 million by 2100.
            <br/><br/>
            To find out more, visit their website at <a href="https://www.centuryinitiative.ca/"><u>https://www.centuryinitiative.ca/</u>.</a>
            <br/>
          </Typography>
        </CardContent>
      </Card>

      <Card className={`${classes.card} ${classes.bounce}`} >
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b>By 2040, 1 in 3 Canadians will be immigrants (or have a parent who is)</b>
          </Typography>
          <PieChart data={data}/>
          <Typography variant="body1" component="p" className={classes.title}>
            By 2040, 1/3 Canadians will be born abroad or have a parent who is.
            <br/>
            <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/220908/dq220908a-eng.htm">Source: Statistics Canada</a>
          </Typography>
        </CardContent>
      </Card>
      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b>More about Canada&apos;s Immigration Policy</b>
            </Typography>
          <Typography variant="body1" component="p">
          &quot;Canada has a long history of immigration. Millions of people from all over the world have chosen, and continue to choose, Canada as their new home. <br/><br/>
          In 2021, more than 8.3 million people, or almost one-quarter (23.0%) of the population, were, or had ever been, a landed immigrant or permanent resident in Canada. <br/><br/>
          This was the largest proportion since Confederation, topping the previous 1921 record of 22.3%, and the highest among the G7.&quot;<br/>
          <br/>
          <Button variant="contained" color="primary" href="https://www150.statcan.gc.ca/n1/daily-quotidien/221026/dq221026a-eng.htm">Source: Statistics Canada</Button>
            </Typography>
            </CardContent>
      </Card>
      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b> Why does Canada need an influx of people?</b>
            </Typography>
          <Typography variant="body1" component="p">
            <b>Canada&apos;s population is aging, and the number of people working to support the population is decreasing. To counter this trend and maintain our standard of living, we need to increase the number of people living in Canada. </b>
            <br/><br/>This can be done responsibly - The Century Initiative aims to engage Canadians in a national conversation about the benefits 
            and challenges of population growth, and to develop a long-term vision and strategy for achieving this ambitious goal. 
            The organization believes that a larger population can help Canada address some of its most pressing social, economic, and environmental challenges, 
            such as an aging population, declining workforce, and the need for innovation and entrepreneurship.
          <br/>
          
            </Typography>
            </CardContent>
      </Card>


      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b> How will we scale up our public services?</b>
            </Typography>
          <Typography variant="body1" component="p">
            <b>As we grow, we need to make sure that our public services are able to scale up with us. </b>
            <br/><br/>We can do this the right way: progressives aim to engage Canadians in a national conversation about the benefits
            and challenges of population growth, and to develop a long-term vision and strategy for achieving this ambitious goal. 
            
            <br/><br/>By making sure that our public services are able to scale up with us by ensuring a well-educated and well-trained workforce and raising wages to attract and retain talent, 
            we can build a stronger, more prosperous Canada.
          <br/>
          
            </Typography>
            </CardContent>
      </Card>

      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" component="h2" className={classes.title}>
            <b> We can&apos;t do it alone.</b>
            </Typography>
          <Typography variant="body1" component="p">
            <b>Canada needs you.</b>
            <Button variant="contained" color="primary" href="https://www.centuryinitiative.ca/">Join the Movement</Button>
            </Typography>
            </CardContent>
      </Card>

      <Card className={`${classes.card} ${classes.bounce}`}>
        <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="body1" component="p">
            <a href="https://aahmed.ca"><b>Copyright © 2023 Ashar Ahmed. Made in Canada.</b></a>
            </Typography>
            </CardContent>
      </Card>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <App />
    </ThemeProvider>
  );
}
