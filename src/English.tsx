import { Box, TextField, Typography } from "@mui/material";

export default function English() {
    return (
        <>
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
        </>
    )
}