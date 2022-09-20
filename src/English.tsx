import { Box, TextField, Typography } from "@mui/material";
import Textarea from '@mui/joy/Textarea';

export default function English(props: any) {
    const { value, setValue } = props;

    return (
        <>
            <Box className='w-1/2 p-5'>
                <Box className='flex items-center flex-col'>
                    <Typography variant='h4'>
                        Write your text
                    </Typography>
                    <Box className="pt-20 min-w-full">
                        <Textarea
                            variant="outlined"
                            minRows={4}
                            value={value}
                            onChange={(e) => setValue(e?.target?.value)}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}