import { Box, Typography } from "@mui/material";
import { Textarea } from '@mui/joy';

export default function Hieroglyphs(props: any) {
    const { value } = props;

    return (
        <>
            <Box className='w-1/2 p-5'>
                <Box className='flex items-center flex-col'>
                    <Typography variant='h4'>
                        Hieroglyphs
                    </Typography>
                    <Box className="pt-20 min-w-full">
                        <Textarea
                            variant="outlined"
                            minRows={10}
                            value={value}
                            readOnly
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}