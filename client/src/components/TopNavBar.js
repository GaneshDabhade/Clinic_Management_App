import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function TopNavBar() {
  return (
    <>
    <Box >
      <AppBar>
        <Toolbar className='TopNavBar'>
          <IconButton color="inherit" size='large'><MenuIcon /></IconButton>
          <Typography variant="h6">Admin Panel</Typography>
          <IconButton color="inherit" size='large'><AccountCircleOutlinedIcon /></IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}