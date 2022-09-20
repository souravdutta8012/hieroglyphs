import { AppBar, Box, Divider, TextField, Toolbar, Typography } from '@mui/material';
import './App.css';
import English from './English';
import Hieroglyphs from './Hieroglyphs';

function App() {
  return (
    <>
      <AppBar position="sticky" className='bg-gray-700'>
        <Toolbar>
        </Toolbar>
      </AppBar>

      <Box className='flex pt-10'>
        <English />
        <Divider orientation="vertical" flexItem />
        <Hieroglyphs />
      </Box>
    </>
  );
}

export default App;
