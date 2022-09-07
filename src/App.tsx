import { AppBar, Box, Divider, TextField, Toolbar, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="sticky" className='bg-gray-700'>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Box className='flex pt-10'>
        <Box className='w-1/2'>
          <Box className='flex items-center flex-col'>
            <Typography variant='h4'>
              Write your text
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              variant="standard"
            />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box className='w-1/2'>
          <Box className='flex items-center flex-col'>
            <Typography variant='h4'>
              Hieroglyphs
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
