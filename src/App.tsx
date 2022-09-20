import { AppBar, Box, Divider, TextField, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
import English from './English';
import Hieroglyphs from './Hieroglyphs';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <AppBar position="sticky" className='bg-gray-700'>
        <Toolbar>
        </Toolbar>
      </AppBar>

      <Box className='flex'>
        <English value={value} setValue={setValue} />
        <Divider orientation="vertical" flexItem />
        <Hieroglyphs value={value} />
      </Box>
    </>
  );
}

export default App;
