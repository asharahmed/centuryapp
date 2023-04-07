import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Header() {
  const classes = useStyles();
  const appBarClasses = clsx(classes.appBar, 'appBar');

  return (
    <header>
      <AppBar position="static" className={appBarClasses}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Century Initiative Visualization
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
