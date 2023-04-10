    import { AppBar, Toolbar, Typography } from '@mui/material';
    import { makeStyles } from '@mui/styles';
    import clsx from 'clsx';
    import { useEffect, useState } from 'react';
    import '@fontsource/roboto';


const useStyles = makeStyles((theme = { palette: {}}) => ({
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
        backgroundColor: theme.palette && theme.palette.primary && theme.palette.primary.main ? theme.palette.primary.main : '#FFFFFF',
    },
    }));

    function Header() {
    const classes = useStyles();
    const appBarClasses = clsx(classes.appBar, 'appBar');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && (
        <header>
            <AppBar position="static" className={appBarClasses}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Century Initiative Visualization
                </Typography>
            </Toolbar>
            </AppBar>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📈</text></svg>"/>
        </header>
        )
    );
    }

    export default Header;
