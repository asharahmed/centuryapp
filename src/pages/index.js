import React from 'react';
import { Card, CardContent, Typography,  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Visualization from './visualization';
import Header from './Header';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ minWidth: 275, padding: 3, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography fontFamily={['Roboto', 'sans-serif']} variant="h5" component="h2" sx={{ marginBottom: 2 }}>
              Century Initiative Visualization
            </Typography>
            <Visualization />
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;

