import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from './Appbar';
import Button from '@mui/material/Button';
import Card from './Card';
import { orange } from '@mui/material/colors';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

function App() {
  return (
    <Box>
      <AppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{ padding: '20px' }}>
          <Grid item xs={0} md={2}>
            SideBar
          </Grid>
          <Grid item xs={12} md={8} sx={{ padding: '20px' }}>
            <Card />
          </Grid>
          <Grid item xs={0} md={2}>
            <Button status='danger'>Click</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
