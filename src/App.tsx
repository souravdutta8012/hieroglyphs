import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Box className='flex'>
        <Box className='w-1/2'>
          <Typography>
            Write your text
          </Typography>
        </Box>
        <Box className='w-1/2'>
          <Typography>
            Hieroglyphs
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
